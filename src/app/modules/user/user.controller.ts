// all Controller 

import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUsersFromDB } from "./user.service";

 export const createUser = async(req: Request, res: Response, next: NextFunction) =>{
   const user = await createUserToDB();
   res.status(200).json({
      status: 'success',
      data: user
   })
}


export const getUsers = async(req: Request, res: Response, next: NextFunction)=>{
   const user = await getUsersFromDB();
   res.status(200).json({
      status: 'Success',
      data: user
   })

}


// Pattern
// Route => Controller -> Service