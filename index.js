import express, { json } from 'express';
import dotenv from 'dotenv';
import jobRouter from './Routes/jobRouter.js';

const app = express();

dotenv.config();
app.use(json());
app.use("/api",jobRouter);
export default app;