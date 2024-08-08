import cookieParser from 'cookie-parser';
import express from 'express';
import { connectDB } from './config/index.js';
import { MONGO_URI, PORT } from './env/index.js';
import * as err from './middleware/errorMiddleware.js';
import router from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use('/api', router);

app.use(err.notFound);
app.use(err.errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB(MONGO_URI);
