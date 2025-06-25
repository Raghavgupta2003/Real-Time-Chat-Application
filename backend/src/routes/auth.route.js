import express from "express"
import  {signup, login, logout, updateProfile} from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";
import { checkAuth } from "../controllers/auth.controller.js";

const router = express.Router();

// router.post("/signup", (req, res)=>{
//     res.send("signup route");
// })

// router.post("/login", (req, res)=>{
//     res.send("login route");
// })

// router.post("/logout", (req, res)=>{
//     res.send("logout route");
// })

//-------I would make these function used in auth.controller---------

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout", logout)

router.put("/update-profile", protectRoute, updateProfile)

router.get("/check", protectRoute, checkAuth);
export default router;