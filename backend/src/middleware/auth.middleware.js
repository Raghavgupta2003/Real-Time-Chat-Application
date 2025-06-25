import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {

        console.log("🍪 Cookies received in protectRoute:", req.cookies);
        console.log("🔑 JWT received:", req.cookies?.jwt);
              
        const token = req.cookies.jwt //we have called it as jwt in utils
        if(!token){
            return res.status(401).json({message: "Unauthorized - No token provided"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded){
            return res.status(401).json({message: "Unautorized - Invalid Token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        req.user = user

        next();
    } catch (error) {
        console.log(`Error in ProtectRoute MIDDLEWARE ${error.message}`);
        res.status(500).json({message: "Internal server error"});
    }
};