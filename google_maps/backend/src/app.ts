import express, { Request, Response } from 'express';

import { mailRouter } from './routes/mailRoutes';

const app = express()
const port: number = 3000;

app.use(express.json());

app.use('/api/v1/mails', mailRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Server Running!');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}🚀`)
})