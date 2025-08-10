import Redis from "ioredis";

// Redis 클라이언트 생성
const redis = new Redis({
  host:
    process.env.NODE_ENV === "production"
      ? process.env.REDIS_HOST
      : "127.0.0.1",
  port: 6379,
});

// 연결 상태 모니터링
redis.on("connect", () => {
  console.log("Redis connected");
});

redis.on("ready", () => {
  console.log("Redis ready");
});

redis.on("error", (err) => {
  console.error("Redis error:", err);
});

// 캐시 미들웨어 함수 (TTL을 매개변수로 받음)
export const cacheMiddleware = (ttl = 300) => {
  return async (req, res, next) => {
    try {
      const cacheKey = `cache:${req.originalUrl}`;

      // Redis에서 캐시된 데이터 확인
      const cachedData = await redis.get(cacheKey);

      if (cachedData) {
        // 캐시된 데이터가 있으면 반환
        const parsedData = JSON.parse(cachedData);
        return res.status(200).json(parsedData);
      }

      // 캐시된 데이터가 없으면 원본 응답을 캐시하도록 설정
      const originalJson = res.json;
      res.json = function (data) {
        // 응답 데이터를 Redis에 캐시 (TTL 설정)
        redis.setex(cacheKey, ttl, JSON.stringify(data));

        // 원본 json 메서드 호출
        return originalJson.call(this, data);
      };

      next();
    } catch (error) {
      console.error("Cache middleware error:", error);
      // Redis 에러가 발생해도 애플리케이션은 계속 동작하도록 next() 호출
      next();
    }
  };
};

// 캐시 무효화 미들웨어 함수 (패턴을 매개변수로 받음)
export const invalidateCache = (pattern = "cache:*") => {
  return async (req, res, next) => {
    try {
      // 패턴에 맞는 모든 캐시 키 찾기
      const keys = await redis.keys(pattern);

      if (keys.length > 0) {
        // 찾은 키들을 모두 삭제
        await redis.del(...keys);
        console.log(
          `Invalidated ${keys.length} cache entries with pattern: ${pattern}`,
        );
      }

      next();
    } catch (error) {
      console.error("Cache invalidation error:", error);
      // Redis 에러가 발생해도 애플리케이션은 계속 동작하도록 next() 호출
      next();
    }
  };
};
