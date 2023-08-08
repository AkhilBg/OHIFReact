// const express = require('express');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123',
//   });
// });

// app.listen(8080, () => console.log('API is running on localhost:8080/login '));

import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
const port = 8080;

app.post('/login', (req: Request, res: Response) => {
  res.send({ token: 'test123' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
