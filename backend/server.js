import dotenv from 'dotenv';
import express from 'express';
import * as err from './middleware/errorMiddleware.js';
import router from './routes/index.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use('/api', router);

app.use(err.notFound);
app.use(err.errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
