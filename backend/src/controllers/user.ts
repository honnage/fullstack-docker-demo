import { NextFunction, Response, Request } from "express";
import ErrorHandler from "../utils/utiliy-class";

export const register = (req:Request, res:Response, next: NextFunction) => {
    try {
        // console.log(req.body)
        const {name, email, phone, password} = req.body;
        if(!name || !email || !phone) {
            return next(new ErrorHandler("Please add all filed", 400))
        }
        
        if(!password || password.length < 6){
            return res.status(400).json({error: "Password must be 6 character log'"})
        }


    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
}