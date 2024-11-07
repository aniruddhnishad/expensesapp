import { Router } from 'express'

const freelancersPanelRouter = Router()

import FreelancersPanelController from '../controllers/FreelancersPanelController.js'

import mw from '../middlewares/mw.js'

const freelancersPanelController = new FreelancersPanelController()


freelancersPanelRouter.post(
  '/testfp',
  mw?.authenticated,
  
  freelancersPanelController?.testfp,
)

export default freelancersPanelRouter
