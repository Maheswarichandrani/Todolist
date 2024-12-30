import jwt from 'jsonwebtoken'

export const verifyToken = async(req,res,next) => {
    try {
        const token = req.cookies?.authToken;

        if(!token){
            console.log("Error in provided token")
            return res.status(400).json({success: false,message: "Unauthorized User.."});
        }
        const payload = jwt.verify(token,process.env.SECRET_TOKEN);

        if(!payload){
           return res.status(400).json({success: false,message: "Unauthorized User.."});
        }

        req.userId = payload.userId;
        next();

    } catch (error) {
        console.log(`Error in verifying token`,error.message);
        res.status(500).json({message: "Internal Error server",success: false});  
    }
}
