import { compare } from "bcryptjs";
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
        //validation
        if(!email || !password) {
            next("Please Provide User Credentials")
            return;
        }

        // find user by email
        const user = await Users.findOne({ email }).select("+password").populate({
            path: "friends",
            select: "firstName lastName location profileUrl -password",
        })

        if(!user) {
            next("Invalid email or password");
            return;
        }

        if(!user?.verified) {
            next(
                "User email is not verified. Check your email account and verify your email"
            );
            return;
        }

        // compare password
        const isMatch = await comparePassword(password, user?.password);
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message })
    }
}