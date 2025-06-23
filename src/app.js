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
    const { location } = req.file;
    const diary = await prisma.diaryEntry.create({
      data: {
        date: new Date(date),
        content,
        photoUrl: location,
      },
    });
    res.json(req.file);
  });

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
