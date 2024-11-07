import * as dotenv from 'dotenv'

dotenv.config()

import axios from 'axios'

import * as jose from 'jose'

import zod from 'zod'

import fs from 'fs'

import util from 'util'

import path from 'path'

import ejs from 'ejs'

import appConfig from '../config/appConfig.js'

class TestController {
  constructor() {}

  /////////////////////////////////////////////////////////////////////////////////////

  /* Add user/index */

  /////////////////////////////////////////////////////////////////////////////////////
  test = async (req, res) => {
    const authCookiesData = req.cookies.authenticatedlcfreelancerfreelancer

    try {
      return res.json({ error: true, a: 'ok!' })
    } catch (error) {
      console.log(error)

      res.render('errors/500', { title: '500 error!' })
    }
  }
}

export default TestController
