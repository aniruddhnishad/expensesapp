import { Router } from 'express'

const testRouter = Router()

import TestController from '../controllers/TestController.js'

const testController = new TestController()

testRouter.get('/1', testController.test)

export default testRouter
