import express from 'express';
import { PrismaClient } from "@prisma/client";
import multer from 'multer';

const app = express();
const prisma = new PrismaClient();

app.use('/photos', express.static('photos'));

const upload = multer({ dest: 'photos/' });

app.route('/')
  .get(async (req, res) => {
    const diaryEntries = await prisma.diaryEntry.findMany();
    return res.status(200).json(diaryEntries);
  })
  .post(upload.single('photo'), async (req, res) => {
    const { date, content } = req.body;
    const { path } = req.file;
    const diaryEntry = await prisma.diaryEntry.create({
      data: {
        date: new Date(date),
        content,
        photoUrl: path,
      },
    });
    return res.json(diaryEntry);
  });

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
