import express, { json } from 'express';
const app = express();
const PORT = 3000;
import { join, resolve } from 'path';

import cors from 'cors';
import apiRouter from './router/api.js';
app.use(cors());
app.use(json());
const testJson = 'hello brandonjhgjh'

// app.use(express.static(path.join(__dirname, '../client')));
app.use('/', express.static('index.html'));

app.use('/api/', apiRouter);

app.get('/api', (req, res) => {
  res.json({testJson})
});


app.use((req, res, next) => {
  res.status(404).send('404 error - page not found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app