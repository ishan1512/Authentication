import express from "express";
import {signup,login,logout,verifyEmail, forgotPassword, resetPassword, checkAuth} from "../controller/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router()

router.post("/signup", signup)
router.post("/verify-email", verifyEmail)

router.post("/login", login)

router.post("/logout", logout)

router.post("/forgot-password", forgotPassword)
router.post("/reset-password/:token", resetPassword)

router.get("/check-auth", protectRoute, checkAuth)

export default router;