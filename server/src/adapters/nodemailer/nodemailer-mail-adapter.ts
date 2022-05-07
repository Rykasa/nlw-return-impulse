import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "276aef02449c42",
        pass: "6b1430fa3f6812"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({ subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Mitori <mitori.kokasa@gmail.com>',
            subject,
            html: body,
    });
    }
}