import Users from "../models/userModel.js";

export const register = async(req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
}