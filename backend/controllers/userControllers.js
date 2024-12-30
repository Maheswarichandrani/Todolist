import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

//@user-register

export const userRegister = async(req,res) => {
    try {
        console.log("User registered")
        const {username,email,password} = req.body;
        
        if(!username||!email||!password){
            return res.status(400).json({success: false,message: "All fields are mandatory.."});
        }

        const isAlreadyExists = await User.findOne({email});

        if(isAlreadyExists){
            return res.status(400).json({success: false,message: "Email Already Exists.."});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })

        const token = jwt.sign({userId: user.id},process.env.SECRET_TOKEN,{expiresIn: '24h'});

        //cookie-generate

        res.cookie("authToken",token,{
            maxAge: 24 * 60 * 60 * 1000,
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            sameSite: "strict"
        })

        res.status(200).json({
            success: true,
            message: "User Registered Successfully...",
            user: {
                ...user._doc,
                password: undefined
            }
        })

    } catch (error) {
        res.status(400).json({success: false,message: "Error in registering User"});
        console.log(error.message);
    }
}

//user-Login

export const userLogin = async (req, res) => {
    try {
        console.log("User Login");
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are mandatory.",
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Enter correct Email.",
            });
        }

        const matchedPassword = await bcrypt.compare(password, user.password);
        if (!matchedPassword) {
            return res.status(400).json({
                success: false,
                message: "Enter correct Password.",
            });
        }

        const token = jwt.sign({ userId: user.id }, process.env.SECRET_TOKEN,{ expiresIn: "24h" });

        res.cookie("authToken", token, {
            maxAge: 24 * 60 * 60 * 1000, 
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            sameSite: "strict",
        });

        return res.status(200).json({
            success: true,
            message: "User Logged in successfully.",
            user: {
                ...user._doc,
                password: undefined, 
            },
        });
    } catch (error) {
        console.error("Error in user login:", error.message);
        return res.status(500).json({
            success: false,
            message: "Error in user logging process.",
        });
    }
};

//current-user Info
export const userInfo = async (req,res) => {
    try {

        if(!req.userId){
            return res.status(404).json({success: false,message: "User Id is missing"})
        }
        const user = await User.findById(req.userId);

        if(!user){
            return res.status(404).json({success: false,message: "User Not found.."});
        }
        console.log("user info is checking")
        return res.status(200).json({
            success: true,
            message: "User verified",
            user: {
                ...user._doc,
                password: undefined
            }
        })
    } catch (error) {
        console.log(error.message)
       return res.status(400).json({success: false,message: "Error fetching user Info.."});
    }
}

//@user-Logout

export const userLogout = async(req,res) => {
    res.clearCookie("authToken",{
        httpOnly: true,
        sameSite: "strict",
        path: '/',
        secure : process.env.SECRET_TOKEN === "production"
    })
    res.status(200).json({
        success: true,
        message: "User Logged Out successfully.."
    })

}