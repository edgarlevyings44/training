import { Request, Response } from "express";
import { sendEmail } from "../mailers/mail";

class MailController {
    async sendMail(req: Request, res: Response) {
        const { to, subject, text } = req.body;

        if (!to || !subject || ! text ) {
            return res.status(400).json('Missing required fields in the request body.')
        }

        try {
            const info = await sendEmail(to, subject, text);
            res.send('Email sent successfully');
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json('Error sending email')
        }
    }

    async checkServer(req: Request, res: Response) {
        const to  = 'edgarlevy88@gmail.com';
        const emailSubject = 'Confirm Mail is received';
        const emailText ='Weekly reminder';
        await sendEmail(to, emailSubject, emailText);

        res.json('Server Running!');
    }
}

export const mailController = new MailController();