import express from 'express';
import { connectDB } from './config/db';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 8080 || process.env.PORT;
// import { connectDB } from './src/config/db';
// import cors from 'cors';
// import dotenv from 'dotenv';
// dotenv.config();

const sayHello = (subject: string): void => {
    console.log('Hello ' + subject);
  };
  
  sayHello('TypeScript');
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  // const corsOptions = {
  //   origin: [
  //     'https://www.travelpalette.me',
  //     'https://travelpalette.me',
  //     'https://travel-mu-three.vercel.app/',
  //     'https://www.travel-mu-three.vercel.app/',
  //     'http://localhost:3000',
  //     'http://localhost:5173',
  //   ], // Replace with your frontend's URL
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   optionsSuccessStatus: 204, // No Content
  //   credentials: true, // Add this line
  //   preflightContinue: true,
  // };
  
  // app.use(express.json());
  // app.use(cors(corsOptions));
  // //connect DB
  connectDB();

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
