import Users from "../models/userModel.js";

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
    } catch (error) {
        console.log(error);
        res.status(404).json({ message: error.message })
    }
}