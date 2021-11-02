import asyncHandler from 'express-async-handler'
import { Request, Response, NextFunction } from "express";
import { initDriver } from "../service/selenuimService";
import {intilizeDriverAndSetCookie,builderSite} from '../service/builderService'


//@desc builder a site
//@route POST /api/builder
//@access public
const builder = asyncHandler (async (req: Request,res: Response)=>{
    const driver = await intilizeDriverAndSetCookie()
    const {components} = req.body 
    await builderSite(driver ,components)
    
    
})


export {
    builder
  }