import { Router } from 'express'

const defaultRouter = Router()

import DefaultController from '../controllers/DefaultController.js'

import mw from '../middlewares/mw.js'

const defaultController = new DefaultController()

defaultRouter.get('/', defaultController.index)

defaultRouter.post('/login', defaultController.login)

defaultRouter.post(
  '/switchrole',
  mw?.authenticated,
  defaultController.switchRole,
)

defaultRouter.get(
  '/dashboard',
  mw?.authenticated,
  defaultController.dashboard,
)

defaultRouter.post('/logout', mw?.authenticated, defaultController.logout)

defaultRouter.post('/logoutalldevices', defaultController.logoutAllDevices)

defaultRouter.post(
  '/getuploadurl',
  mw?.authenticated,
  defaultController.getUploadUrl,
)

defaultRouter.post(
  '/deletes3object',
  mw?.authenticated,
  defaultController.deleteAttachment,
)

defaultRouter.get('/flash', defaultController.flash)

defaultRouter.get('/flashtest', defaultController.flashTest)

defaultRouter.get('/test', defaultController.test)

export default defaultRouter
