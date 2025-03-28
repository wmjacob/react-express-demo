import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

import { validateCardNumber } from './card-validator';

const app = express();

/** 
 * never do this in production
 * but since this is a demo leaving it open so a port rollover in localhost
 * doesn't break the demo
 */
app.use(cors({ origin: '*' }));

app.use(express.json()); // Ensure JSON requests are parsed

app.use(express.static(path.join(__dirname, './public')));
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

interface CardValidateInput {
  cardNumber: string;
}

interface CardValidateOutput {
  valid: boolean;
  error: string;
}

app.post('/api/validate', (req: Request<unknown, unknown, CardValidateInput>, res: Response<CardValidateOutput>) => {
  const { cardNumber } = req.body;
  if (!cardNumber) {
    res.status(400).json({ valid: true, error: 'Card number is required' });
  }
  res.json({ valid: validateCardNumber(cardNumber), error: '' });
});

app.listen(8080, () => {
  console.log('server listening on port 8080');
});