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
        style='font-family: Arial, sans-serif; font-size: 20px; color: #333; background-color:'>
        <h1 style="color: rgb(8, 56, 188)">Please verify your email address</h1>
        <br>
        <h4>Hi, ${lastName}</h4>
        <p>
            Please v
        </p>
        </div>`
    }
}
