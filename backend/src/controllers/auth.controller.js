import User from "../models/user.model.js";
import {generateToken} from "../lib/utils.js";
import bcrypt from "bcrypt";
import cloudinary from "../lib/cloudinary.js";

export const signup = async(req, res)=>{
    // res.send("signup route");
    const {fullName, email, password} = req.body
    try{
        if(!fullName || !email || !password){
            return res.status(400).json({message: "All fields required"});

        }
        if(password.length < 6){
            return res.status(400).json({message: "Password must be at least 6 characters"});
        }

        const user = await User.findOne({email})
        if(user) return res.status(400).json({message: "email already exists"});

        //password Hashing
        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName: fullName,
            email: email,
            password: hashedPassword
        })
        
        if(newUser){
            //generate JWT token here
            generateToken(newUser._id, res)
            await newUser.save();
            console.log("User saved to DB:", newUser); //for debugging

            res.status(201).json({
                _id:newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                password: newUser.password
            })

        }else{
            res.status(400).json({message: "Invalid user data"});
        }
    }catch(error){
        console.log(`error in signing Up controller ${error}`);
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const login = async(req, res)=>{
    // res.send("login route");
    //-----here user send email and password---------
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({message: "Invalid credentials"})  
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message: "Invalid credentials"})  
        }

        generateToken(user._id, res)

        res.status(200).json({
            _id:user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
        })
    }catch(error){
        console.log("Error in login controller", error.message);
        res.status(500).json({message: "INTERNAL SERVER ERROR"})
    }
};

export const logout = (req, res)=>{
    // res.send("logout route");

    try{
        res.cookie("jwt", "", {maxAge:0});
        res.status(200).json({message: "Logged out success"})
    }catch(error){
        console.log(`Error in  logout Controller, ${error.message}`);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    }
};


export const updateProfile = async(req, res)=>{
    // res.send("update profile route");
    try {
        const {profilePic} = req.body;
        const userId = req.user._id;

        if(!profilePic){
            return res.status(400).json({message: "Profile pic is required"});
        }

        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        const updatedUser = await User.findByIdAndUpdate(userId, {profilePic:uploadResponse.secure_url}, {new:true})

        res.status(200).json(updatedUser)

    } catch (error) {
        console.log("Error in Update Profile:", error);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    }
};

// export const checkAuth = (req, res) =>{
//     try {
//         res.status(200).json(req.user);
//     } catch (error) {
//         console.log("Error in checkAuth Controller", error.message);
//         res.status(500).json({message: "Internal Server Error"});
//     }
// }

export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password"); // exclude password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Error in checkAuth Controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
