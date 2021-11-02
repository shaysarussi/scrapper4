import express from 'express'
import {builder} from '../controllers/builderController'
const router = express.Router()

router.route('/').post(builder)

///

export default router