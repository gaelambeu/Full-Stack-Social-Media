import nodemailer from "nodemailer"
import dotenv from "dotenv"
import { v4 as uuidv4 } from "uuid"

dotenv.config();

const { AUTH_EMAIL, AUTH_PASSWORD, APP_URL } = process.env;

let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    auth: {
        user: AUTH_EMAIL,
        pass: AUTH_PASSWORD,
    },
})

export const sendverificationEmail = async (user, res) => {
    const { _id, email, lastName } = user;

    const token = _id + uuidv4();

    const link = APP_URL + "users/verify/" + _id + "/" + token;

    // mail options
    const mailOptions = {
        from: AUTH_EMAIL,
        to: email,
        subject: "Email Verification",
        html:`<div
        style='font-family: Arial, sans-serif; font-size: 20px; color: #333; background-color: #000'>
        <h1 style="color: rgb(8, 56, 188)">Please verify your email address</h1>
        <br>
        <h4>Hi, ${lastName}</h4>
        <p>
            Please verify your email address so we can know that it's really you.
            <br>
            <p>This link <b>exprires in 1 hour</b></p>
            <br>
            <a href=${link}
                style="color: #fff; padding: 14px; text-decoration: none; background-color: #000;"
            > Email Address</a>
        </p>
        <div style="margin-top: 20px;">
            <h5>Best Regards</h5>
            <h5>ShareFun Team</h5>
        </div>
        </div>`
    }
}
