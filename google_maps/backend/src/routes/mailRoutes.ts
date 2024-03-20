import express from 'express'
import { mailController } from '../controllers/mailController'

export const router = express.Router()

// send mail
router.post('/send-mail', mailController.sendMail)
router.get('/check-server', mailController.checkServer)

export { router as mailRouter };