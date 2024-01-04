import { createTransport } from 'nodemailer';

const emailService = process.env.NEXT_PUBLIC_EMAIL_SERVICE;
const emailPassword = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

export const transporter = createTransport({
    service: 'gmail', // or your email service
    auth: {
        user: emailService,
        pass: emailPassword,
    },
});
