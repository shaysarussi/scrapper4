import express from 'express'
import {scraper} from '../controllers/scrapperController'
 const router = express.Router()




 router.route('/').post(scraper)

 export default router