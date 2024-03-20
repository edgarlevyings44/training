import express, { Request, Response } from 'express';

import { mailRouter } from './routes/mailRoutes';
import { sendEmail } from './mailers/mail';

const app = express()
const port: number = 3000;

app.use(express.json());

app.use('/api/v1/mails', mailRouter)
app.get('/check-server', mailRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}🚀`)
})