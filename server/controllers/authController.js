import Users from "../models/userModel.js";
import { hashString } from "../utils/index.js";
import { sendverificationEmail } from "../utils/sendEmail.js";

export const register = async(req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    //validate fileds
    if (!(firstName || lastName || email || password)) {
        next("Provide Required Fields!");
        return;
    }

    try {
        const userExit = await Users.findOne({ email });
        
        if (userExit) {
            next("Email Address already exists");
            return;
        }

        const hashedPassword =  await hashString(password);

        const user = await Users.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        })

        //send email verification to user*
        sendverificationEmail(user, res);

    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message })
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message })
    }
}