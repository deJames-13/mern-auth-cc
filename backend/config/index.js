import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || null;

export { default as connectDB } from './db.js';
export { MONGO_URI, PORT };
