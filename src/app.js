import express from "express";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import { S3Client } from "@aws-sdk/client-s3";
import multerS3 from "multer-s3";

const app = express();
const prisma = new PrismaClient();

const s3 = new S3Client({
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// CloudFront URL 생성 함수
const getCloudFrontUrl = (s3Key) => {
  const cloudFrontDomain = process.env.CLOUDFRONT_DOMAIN;
  if (!cloudFrontDomain) {
    throw new Error("CLOUDFRONT_DOMAIN is not set");
  }
  return `https://${cloudFrontDomain}/${s3Key}`;
};

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    key: (req, file, cb) => {
      cb(null, `public/${Date.now()}_${file.originalname}`);
    },
  }),
});

app
  .route("/")
  .get(async (req, res) => {
    const diaryEntries = await prisma.diaryEntry.findMany();
    return res.status(200).json(diaryEntries);
  })
  .post(upload.single("photo"), async (req, res) => {
    const { date, content } = req.body;
    const { key } = req.file;
    const photoUrl = getCloudFrontUrl(key);

    const diary = await prisma.diaryEntry.create({
      data: {
        date: new Date(date),
        content,
        photoUrl,
      },
    });
    res.json(diary);
  });

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
