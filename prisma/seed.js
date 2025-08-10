import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const prisma = new PrismaClient();

const diaryEntries = [
  {
    content:
      "오늘은 정말 좋은 날씨였다. 공원에서 산책을 하면서 새싹들이 돋아나는 것을 보았다. 봄이 왔다는 것이 실감된다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content:
      "친구들과 함께 맛있는 피자를 먹었다. 오랜만에 만나서 정말 즐거웠다. 다음에 또 만나기로 했다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content:
      "새로운 책을 읽기 시작했다. 이번 주말에는 이 책을 끝까지 읽어보려고 한다. 정말 흥미진진하다.",
    photoUrl: null,
  },
  {
    content:
      "오늘은 집에서 요리를 해봤다. 처음 시도한 레시피였는데 생각보다 잘 나왔다. 다음에는 더 도전적인 요리에 도전해보고 싶다.",
    photoUrl: null,
  },
  {
    content:
      "비가 오는 날씨였다. 창가에 앉아서 커피를 마시며 비 소리를 들었다. 이런 날씨도 나름의 매력이 있다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content:
      "운동을 시작했다. 처음에는 힘들었지만 점점 익숙해지고 있다. 건강한 몸을 위해 꾸준히 해야겠다.",
    photoUrl: null,
  },
  {
    content:
      "새로운 영화를 봤다. 예상보다 훨씬 재미있었다. 주말에 친구들에게 추천해주고 싶다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content:
      "오늘은 정말 바쁜 하루였다. 하지만 할 일을 모두 마쳤을 때의 성취감이 정말 좋았다.",
    photoUrl: null,
  },
  {
    content:
      "가족들과 함께 저녁을 먹었다. 평소보다 더 맛있게 느껴졌다. 가족의 소중함을 다시 한번 깨달았다.",
    photoUrl: null,
  },
  {
    content:
      "새로운 취미를 시작했다. 처음에는 어려웠지만 점점 재미를 느끼고 있다. 새로운 도전은 항상 설레게 한다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content:
      "아침 일찍 일어나 산책을 했다. 상쾌한 공기가 기분을 좋게 해주었다.",
    photoUrl: null,
  },
  {
    content: "도서관에서 하루 종일 공부했다. 집중이 잘 되는 날이었다.",
    photoUrl: null,
  },
  {
    content: "오랜만에 부모님과 통화했다. 목소리를 들으니 마음이 편안해졌다.",
    photoUrl: null,
  },
  {
    content: "카페에서 새로운 디저트를 먹어봤다. 달콤하고 맛있었다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "비가 그친 후 무지개를 봤다. 오랜만에 보는 무지개라서 신기했다.",
    photoUrl: null,
  },
  {
    content: "친구와 함께 자전거를 탔다. 바람을 맞으며 달리는 기분이 최고였다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "오늘은 집에서 푹 쉬었다. 오랜만에 여유로운 하루였다.",
    photoUrl: null,
  },
  {
    content: "새로운 음악을 들었다. 멜로디가 마음에 들어서 반복해서 들었다.",
    photoUrl: null,
  },
  {
    content: "동네에 새로 생긴 빵집에 다녀왔다. 빵이 정말 부드럽고 맛있었다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "저녁에 산책하며 별을 봤다. 밤하늘이 맑아서 별이 많이 보였다.",
    photoUrl: null,
  },
  {
    content: "오늘은 운동을 쉬고 책을 읽었다. 조용한 시간이 좋았다.",
    photoUrl: null,
  },
  {
    content: "회사에서 좋은 소식을 들었다. 기분 좋은 하루였다.",
    photoUrl: null,
  },
  {
    content:
      "새로운 요리 레시피를 시도했다. 가족들이 맛있게 먹어줘서 뿌듯했다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "오랜만에 영화를 봤다. 감동적인 내용에 눈물이 났다.",
    photoUrl: null,
  },
  {
    content: "오늘은 날씨가 흐려서 집에서 음악을 들으며 시간을 보냈다.",
    photoUrl: null,
  },
  {
    content: "친구와 함께 등산을 다녀왔다. 정상에서 본 경치가 정말 멋졌다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 취미로 그림을 그리기 시작했다. 아직 서툴지만 재미있다.",
    photoUrl: null,
  },
  {
    content: "오늘은 특별한 일이 없었지만 평온한 하루였다.",
    photoUrl: null,
  },
  {
    content: "아침에 일찍 일어나 커피를 마셨다. 하루를 상쾌하게 시작했다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "도시락을 싸서 공원에서 점심을 먹었다. 바람이 시원했다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집안일을 모두 끝냈다. 뿌듯한 하루였다.",
    photoUrl: null,
  },
  {
    content: "오랜만에 친구와 전화로 긴 대화를 나눴다. 서로의 근황을 공유했다.",
    photoUrl: null,
  },
  {
    content: "새로운 운동화를 샀다. 내일 신을 생각에 설렌다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "오늘은 비가 와서 집에서 영화를 봤다. 따뜻한 차와 함께였다.",
    photoUrl: null,
  },
  {
    content: "아침에 일어나 창밖을 보니 햇살이 가득했다. 기분 좋은 시작이었다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "오늘은 회사에서 바쁜 하루를 보냈다. 그래도 보람 있었다.",
    photoUrl: null,
  },
  {
    content: "저녁에 가족과 함께 산책을 했다. 소소한 대화가 행복했다.",
    photoUrl: null,
  },
  {
    content: "새로운 드라마를 보기 시작했다. 다음 이야기가 기대된다.",
    photoUrl: null,
  },
  {
    content: "오늘은 특별히 맛있는 저녁을 먹었다. 오랜만에 외식이라 즐거웠다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "아침에 일찍 일어나 운동을 했다. 상쾌한 하루의 시작이었다.",
    photoUrl: null,
  },
  {
    content: "오늘은 친구와 함께 쇼핑을 다녀왔다. 좋은 물건을 많이 샀다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "집에서 새로운 레시피로 파스타를 만들어봤다. 맛있게 완성됐다.",
    photoUrl: null,
  },
  {
    content: "오늘은 일찍 퇴근해서 여유로운 저녁을 보냈다.",
    photoUrl: null,
  },
  {
    content: "오랜만에 가족과 보드게임을 했다. 모두가 즐거워했다.",
    photoUrl: null,
  },
  {
    content: "새로운 카페를 발견했다. 분위기가 좋아서 자주 가고 싶다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "오늘은 날씨가 좋아서 자전거를 탔다. 기분이 상쾌했다.",
    photoUrl: null,
  },
  {
    content: "아침에 일어나 창문을 열었더니 상쾌한 바람이 들어왔다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "오늘은 회사에서 회의가 많았다. 조금 피곤했지만 보람 있었다.",
    photoUrl: null,
  },
  {
    content: "저녁에 산책하며 음악을 들었다. 마음이 편안해졌다.",
    photoUrl: null,
  },
  {
    content: "새로운 책을 샀다. 주말에 읽을 생각에 기대된다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집에서 요가를 했다. 몸과 마음이 가벼워졌다.",
    photoUrl: null,
  },
  {
    content: "친구와 함께 맛집을 찾아갔다. 음식이 정말 맛있었다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "오늘은 특별한 일이 없었지만 평화로운 하루였다.",
    photoUrl: null,
  },
  {
    content: "아침에 일찍 일어나 산책을 했다. 상쾌한 공기가 좋았다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "오늘은 회사에서 칭찬을 받았다. 기분이 좋았다.",
    photoUrl: null,
  },
  {
    content: "저녁에 가족과 함께 영화를 봤다. 모두가 즐거워했다.",
    photoUrl: null,
  },
  {
    content: "새로운 취미로 사진 찍기를 시작했다. 재미있다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "오늘은 집에서 푹 쉬었다. 오랜만에 여유로운 하루였다.",
    photoUrl: null,
  },
  {
    content: "아침에 일어나 커피를 마셨다. 하루를 상쾌하게 시작했다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "오늘은 새로운 운동을 배웠다. 처음엔 어려웠지만 점점 익숙해졌다.",
    photoUrl: null,
  },
  {
    content: "비가 와서 집에서 영화를 봤다. 오랜만에 여유로운 시간이었다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "친구와 카페에서 수다를 떨었다. 기분이 한결 좋아졌다.",
    photoUrl: null,
  },
  {
    content: "도서관에서 책을 빌렸다. 이번 주말에 읽을 예정이다.",
    photoUrl: null,
  },
  {
    content: "오늘은 회사에서 새로운 프로젝트를 시작했다. 설레는 하루였다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "아침에 조깅을 했다. 상쾌한 공기가 기분을 좋게 했다.",
    photoUrl: null,
  },
  {
    content: "저녁에 가족과 보드게임을 했다. 모두가 즐거워했다.",
    photoUrl: null,
  },
  {
    content: "오늘은 특별히 맛있는 저녁을 먹었다. 행복한 하루였다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 음악을 들었다. 마음이 편안해졌다.",
    photoUrl: null,
  },
  {
    content: "오랜만에 친구에게 연락했다. 반가운 소식이 많았다.",
    photoUrl: null,
  },
  {
    content: "오늘은 회사에서 바쁜 하루를 보냈다. 그래도 뿌듯했다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "아침에 일찍 일어나 산책을 했다. 맑은 하늘이 인상적이었다.",
    photoUrl: null,
  },
  {
    content: "저녁에 맛있는 디저트를 먹었다. 달콤한 하루였다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "오늘은 집에서 책을 읽으며 시간을 보냈다.",
    photoUrl: null,
  },
  {
    content: "새로운 취미로 그림 그리기를 시작했다. 재미있다.",
    photoUrl: null,
  },
  {
    content: "친구와 함께 영화를 봤다. 정말 재미있었다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "오늘은 회사에서 회식이 있었다. 모두가 즐거워했다.",
    photoUrl: null,
  },
  {
    content: "아침에 커피를 마시며 여유를 즐겼다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "오늘은 특별한 일이 없었지만 평화로웠다.",
    photoUrl: null,
  },
  {
    content: "저녁에 산책하며 별을 봤다. 아름다운 밤이었다.",
    photoUrl: null,
  },
  {
    content: "새로운 요리 레시피를 시도했다. 생각보다 맛있었다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "오늘은 회사에서 칭찬을 받았다. 기분이 좋았다.",
    photoUrl: null,
  },
  {
    content: "아침에 일찍 일어나 운동을 했다. 상쾌한 하루의 시작이었다.",
    photoUrl: null,
  },
  {
    content: "친구와 함께 산책을 했다. 오랜만에 많은 이야기를 나눴다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "오늘은 집에서 푹 쉬었다. 오랜만에 여유로운 하루였다.",
    photoUrl: null,
  },
  {
    content: "새로운 영화를 봤다. 감동적인 이야기였다.",
    photoUrl: null,
  },
  {
    content: "저녁에 가족과 함께 식사를 했다. 따뜻한 시간이 되었다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "오늘은 회사에서 바쁜 하루를 보냈다. 그래도 뿌듯했다.",
    photoUrl: null,
  },
  {
    content: "아침에 산책을 하며 자연을 느꼈다.",
    photoUrl: null,
  },
  {
    content: "친구와 함께 카페에서 시간을 보냈다. 즐거운 하루였다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "오늘은 새로운 책을 읽기 시작했다. 흥미로운 내용이었다.",
    photoUrl: null,
  },
  {
    content: "저녁에 음악을 들으며 휴식을 취했다.",
    photoUrl: null,
  },
  {
    content: "오늘은 회사에서 좋은 소식을 들었다. 기분이 좋았다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "아침에 일찍 일어나 운동을 했다. 상쾌했다.",
    photoUrl: null,
  },
  {
    content: "친구와 함께 영화를 봤다. 재미있는 시간이 되었다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집에서 요리를 했다. 새로운 레시피를 시도했다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "저녁에 가족과 산책을 했다. 평화로운 시간이 되었다.",
    photoUrl: null,
  },
  {
    content: "오늘은 회사에서 바쁜 하루를 보냈다. 피곤했지만 뿌듯했다.",
    photoUrl: null,
  },
  {
    content: "아침에 커피를 마시며 하루를 시작했다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "친구와 함께 맛있는 음식을 먹었다. 행복한 하루였다.",
    photoUrl: null,
  },
  {
    content: "오늘은 특별한 일이 없었지만 평화로웠다.",
    photoUrl: null,
  },
  {
    content: "저녁에 산책하며 음악을 들었다. 마음이 편안해졌다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 취미로 사진 찍기를 시작했다. 재미있다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집에서 푹 쉬었다. 오랜만에 여유로운 하루였다.",
    photoUrl: null,
  },
  {
    content: "아침에 일어나 커피를 마셨다. 하루를 상쾌하게 시작했다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "친구와 함께 산책을 했다. 오랜만에 많은 이야기를 나눴다.",
    photoUrl: null,
  },
  {
    content: "오늘은 회사에서 칭찬을 받았다. 기분이 좋았다.",
    photoUrl: null,
  },
  {
    content: "저녁에 가족과 함께 영화를 봤다. 모두가 즐거워했다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 취미로 그림 그리기를 시작했다. 재미있다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집에서 책을 읽으며 시간을 보냈다.",
    photoUrl: null,
  },
  {
    content: "오늘은 맑은 하늘 아래 산책을 하며 기분이 상쾌했다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "도서관에서 조용히 책을 읽는 시간을 가졌다.",
    photoUrl: null,
  },
  {
    content: "비가 내려 창밖을 바라보며 커피를 마셨다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "오랜만에 가족과 함께 저녁을 먹었다.",
    photoUrl: null,
  },
  {
    content: "새로운 운동을 시작했다. 몸이 개운하다.",
    photoUrl: null,
  },
  {
    content: "친구와 영화를 보고 즐거운 시간을 보냈다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "오늘은 회사에서 중요한 발표를 했다.",
    photoUrl: null,
  },
  {
    content: "아침 일찍 일어나 산책을 다녀왔다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "집에서 요리를 하며 힐링하는 하루였다.",
    photoUrl: null,
  },
  {
    content: "카페에서 혼자 시간을 보내며 생각을 정리했다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "오늘은 새로운 사람을 만나 좋은 대화를 나눴다.",
    photoUrl: null,
  },
  {
    content: "저녁에 음악을 들으며 하루를 마무리했다.",
    photoUrl: null,
  },
  {
    content: "공원에서 자전거를 타며 바람을 느꼈다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "오랜만에 취미로 그림을 그렸다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집안일을 하며 시간을 보냈다.",
    photoUrl: null,
  },
  {
    content: "친구와 함께 맛있는 디저트를 먹었다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "아침에 일찍 일어나 운동을 했다.",
    photoUrl: null,
  },
  {
    content: "오늘은 회사에서 바쁜 하루를 보냈다.",
    photoUrl: null,
  },
  {
    content: "저녁에 산책하며 별을 바라봤다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 책을 읽기 시작했다.",
    photoUrl: null,
  },
  {
    content: "오늘은 특별한 일이 없었지만 평온했다.",
    photoUrl: null,
  },
  {
    content: "아침에 커피 한 잔으로 하루를 시작했다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "친구와 전화로 오랜만에 긴 대화를 나눴다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집에서 영화를 보며 쉬었다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 레시피로 요리를 해봤다.",
    photoUrl: null,
  },
  {
    content: "오랜만에 가족과 산책을 다녀왔다.",
    photoUrl: null,
  },
  {
    content: "오늘은 회사에서 칭찬을 받아 기뻤다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "아침에 일찍 일어나 조깅을 했다.",
    photoUrl: null,
  },
  {
    content: "저녁에 친구와 맛있는 저녁을 먹었다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "오늘은 집에서 음악을 들으며 책을 읽었다.",
    photoUrl: null,
  },
  {
    content: "새로운 취미로 사진 찍기를 시작했다.",
    photoUrl: null,
  },
  {
    content: "아침에 산책하며 상쾌한 공기를 마셨다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "오늘은 회사에서 바쁜 하루를 보냈다.",
    photoUrl: null,
  },
  {
    content: "저녁에 가족과 함께 영화를 봤다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 책을 읽으며 시간을 보냈다.",
    photoUrl: null,
  },
  {
    content: "오늘은 친구와 함께 카페에 다녀왔다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "아침에 일찍 일어나 운동을 했다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집에서 요리를 하며 힐링했다.",
    photoUrl: null,
  },
  {
    content: "저녁에 산책하며 음악을 들었다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 취미로 그림 그리기를 시작했다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집에서 책을 읽으며 시간을 보냈다.",
    photoUrl: null,
  },
  {
    content: "아침에 커피를 마시며 하루를 시작했다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "친구와 함께 산책을 하며 많은 이야기를 나눴다.",
    photoUrl: null,
  },
  {
    content: "오늘은 회사에서 좋은 소식을 들었다.",
    photoUrl: null,
  },
  {
    content: "저녁에 가족과 함께 저녁 식사를 했다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 운동을 시작해 몸이 개운하다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집에서 푹 쉬었다.",
    photoUrl: null,
  },
  {
    content: "아침에 일찍 일어나 산책을 다녀왔다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "친구와 함께 영화를 보고 즐거운 시간을 보냈다.",
    photoUrl: null,
  },
  {
    content: "오늘은 회사에서 바쁜 하루를 보냈다.",
    photoUrl: null,
  },
  {
    content: "저녁에 산책하며 별을 바라봤다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 책을 읽기 시작했다.",
    photoUrl: null,
  },
  {
    content: "오늘은 특별한 일이 없었지만 평온했다.",
    photoUrl: null,
  },
  {
    content: "아침에 커피 한 잔으로 하루를 시작했다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "친구와 전화로 오랜만에 긴 대화를 나눴다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집에서 영화를 보며 쉬었다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 레시피로 요리를 해봤다.",
    photoUrl: null,
  },
  {
    content: "오랜만에 가족과 산책을 다녀왔다.",
    photoUrl: null,
  },
  {
    content: "오늘은 회사에서 칭찬을 받아 기뻤다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "아침에 일찍 일어나 조깅을 했다.",
    photoUrl: null,
  },
  {
    content: "저녁에 친구와 맛있는 저녁을 먹었다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "오늘은 집에서 음악을 들으며 책을 읽었다.",
    photoUrl: null,
  },
  {
    content: "새로운 취미로 사진 찍기를 시작했다.",
    photoUrl: null,
  },
  {
    content: "아침에 산책하며 상쾌한 공기를 마셨다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "오늘은 회사에서 바쁜 하루를 보냈다.",
    photoUrl: null,
  },
  {
    content: "저녁에 가족과 함께 영화를 봤다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 책을 읽으며 시간을 보냈다.",
    photoUrl: null,
  },
  {
    content: "오늘은 친구와 함께 카페에 다녀왔다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "아침에 일찍 일어나 운동을 했다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집에서 요리를 하며 힐링했다.",
    photoUrl: null,
  },
  {
    content: "저녁에 산책하며 음악을 들었다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 취미로 그림 그리기를 시작했다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집에서 책을 읽으며 시간을 보냈다.",
    photoUrl: null,
  },
  {
    content: "아침에 커피를 마시며 하루를 시작했다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "친구와 함께 산책을 하며 많은 이야기를 나눴다.",
    photoUrl: null,
  },
  {
    content: "오늘은 회사에서 좋은 소식을 들었다.",
    photoUrl: null,
  },
  {
    content: "저녁에 가족과 함께 저녁 식사를 했다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 운동을 시작해 몸이 개운하다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집에서 푹 쉬었다.",
    photoUrl: null,
  },
  {
    content: "아침에 일찍 일어나 산책을 다녀왔다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "친구와 함께 영화를 보고 즐거운 시간을 보냈다.",
    photoUrl: null,
  },
  {
    content: "오늘은 회사에서 바쁜 하루를 보냈다.",
    photoUrl: null,
  },
  {
    content: "저녁에 산책하며 별을 바라봤다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 책을 읽기 시작했다.",
    photoUrl: null,
  },
  {
    content: "오늘은 특별한 일이 없었지만 평온했다.",
    photoUrl: null,
  },
  {
    content: "아침에 커피 한 잔으로 하루를 시작했다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "친구와 전화로 오랜만에 긴 대화를 나눴다.",
    photoUrl: null,
  },
  {
    content: "오늘은 집에서 영화를 보며 쉬었다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "새로운 레시피로 요리를 해봤다.",
    photoUrl: null,
  },
  {
    content: "오랜만에 가족과 산책을 다녀왔다.",
    photoUrl: null,
  },
  {
    content: "오늘은 회사에서 칭찬을 받아 기뻤다.",
    photoUrl: "photos/1.jpg",
  },
  {
    content: "아침에 일찍 일어나 조깅을 했다.",
    photoUrl: null,
  },
  {
    content: "저녁에 친구와 맛있는 저녁을 먹었다.",
    photoUrl: "photos/2.jpg",
  },
  {
    content: "오늘은 집에서 음악을 들으며 책을 읽었다.",
    photoUrl: null,
  },
  {
    content: "새로운 취미로 사진 찍기를 시작했다.",
    photoUrl: null,
  },
];

async function main() {
  console.log("시드 데이터 생성을 시작합니다...");

  // 기존 데이터 삭제 (선택사항)
  await prisma.diaryEntry.deleteMany({});

  // 새로운 시드 데이터 생성
  for (const entry of diaryEntries) {
    await prisma.diaryEntry.create({
      data: entry,
    });
  }

  console.log("시드 데이터 생성이 완료되었습니다!");
  console.log(`${diaryEntries.length}개의 일기 항목이 생성되었습니다.`);
}

main()
  .catch((e) => {
    console.error("시드 데이터 생성 중 오류가 발생했습니다:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
