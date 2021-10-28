import asyncHandler from 'express-async-handler'
import { Request, Response, NextFunction } from "express";
import {
  scrapperSite,
} from "../service/scrapperService";

//@desc get scrapper from site
//@route POST /api/scrape
//@access public
const scraper = asyncHandler (async (req: Request,res: Response)=>{
    
   const respone = await scrapperSite(req.body.url);

   Promise.all(respone)
    .then((r:any) => res.status(200).json({ divs: r, length: r.length }))
    .catch(() => res.status(500).json({ message: "Error occur" }));
})

export {
  scraper,
}