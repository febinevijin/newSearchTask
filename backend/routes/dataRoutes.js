import express from  'express'
import { addProducts, getAllData, searchData } from '../controller/dataController.js'

const router = express.Router()

router.route('/').get(addProducts)
router.route('/searchData').get(searchData)
router.route('/getAllData').get(getAllData)

export default router
