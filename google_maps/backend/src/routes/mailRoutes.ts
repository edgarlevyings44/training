import express from 'express'
import { mailController } from '../controllers/mailController'

export const router = express.Router()

// send mail
router.post('/send-mail', mailController.sendMail)

export { router as mailRouter };