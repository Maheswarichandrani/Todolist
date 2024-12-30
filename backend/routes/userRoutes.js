import express from 'express'
import { userInfo, userLogin, userLogout, userRegister } from "../controllers/userControllers.js";
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post('/register',userRegister);
router.post('/login',userLogin);
router.post('/logout',userLogout);
router.get('/check-auth',verifyToken,userInfo)

export default router;