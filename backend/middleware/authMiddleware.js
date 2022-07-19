import  JWT  from "jsonwebtoken";
import User from "../model/userModel.js";
import asyncHandler from 'express-async-handler'
import ErrorHandler from "./ErrorHandler.js";
import CatchAsyncError from "./CatchAsyncError.js";


// export const protect = asyncHandler(async (req, res, next) => {

//     let token;

//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       try {
//         token = req.headers.authorization.split(" ")[1];
  
//         //decodes token id
//         const decoded = JWT.verify(token, process.env.JWT_SECRET);
  
//         req.user = await User.findById(decoded.id).select("-password");
  
//         next();
//       } catch (error) {
//         res.status(401)
//         throw new Error("Not authorized, token failed");
//       }
//     }
  
//     if (!token) {
//       res.status(401)
//       throw new Error(false);
//     }
//   });



 export const authenticatedUser = CatchAsyncError(async (req, res, next) => {
  // console.log(req.cookies,"----00000000000-------");
    let {searchToken} = req.cookies
    
        console.log(req.cookies,"-----------");
   console.log(searchToken);
   console.log('llllllllllllllll');
   
    if (!searchToken) {
        return next(new ErrorHandler("Please Login to access this resource", 401))
    }

    const decodeData = JWT.verify(searchToken,process.env.JWT_SECRET)

    req.user = await User.findById(decodeData.id)
    console.log(req.user);


    next();

})