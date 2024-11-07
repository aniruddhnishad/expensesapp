import * as dotenv from 'dotenv'

dotenv.config()

import axios from 'axios'

import zod from 'zod'

import fs from 'fs'

import path from 'path'

import ejs from 'ejs'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

import appConfig from '../config/appConfig.js'

import helpers from '../helpers/helpers.js'

class FreelancersPanelController {
  constructor() {}

  
  testfp = async (req, res) => {
    try {
      if (!req?.jwtKey) return res.redirect('/')

      const axiosAssignmentsToken = req.axiosAssignmentsToken

      const axiosData = {
        url: `${appConfig.ASSIGNMENTS_API}/api/v1/getfreelancerworkreceivedbyfreelancer`,
        method: 'POST',
        data: { user_id: req.user_id },
        headers: { authorization: `Bearer ${axiosAssignmentsToken}` },
      }

      const responseData = await axios(axiosData)

      const actualData = responseData.data

      if (actualData.error) throw new Error(actualData.data)

      const assignmentsData = actualData.data

      const dashboardData = {
        title: `Dashboard | ${req.role[0]}${req.role.slice(1).toLowerCase()}`,

        first_name: req.first_name,

        middle_name: req.middle_name,

        last_name: req.last_name,

        nick_name: req.nick_name,

        user_id: req.user_id,

        u_id: req.u_id,

        email: req.email,

        role: req.role,

        roles: req.roles,

        assignmentsData,
      }

      const ejsFile = path.join(
        __dirname,
        '..',
        'views',
        'dashboard',
        'freelancer',
        'assignmentReceived.ejs',
      )

      const compiled = ejs.compile(fs.readFileSync(ejsFile, 'utf8'))

      const html = compiled(dashboardData)

      return res.send(html)
    } catch (error) {
      console.log(error)

      if (error?.issues) {
        const zodErrorData = JSON.parse(error?.message).map((errorMessage) => {
          if (errorMessage.message)
            return {
              message: `"${errorMessage?.path}" is ${errorMessage?.message}`,
            }
        })

        return res.json({ error: true, data: zodErrorData[0]?.message })
      } else {
        console.log(error?.message.fields)

        if (error?.message?.fields)
          return res.json({ error: true, data: error?.message.fields?.message })

        if (error?.message.fields)
          return res.json({ error: true, data: error?.message.fields?.message })

        return res.json({ error: true, data: error?.message })
      }
    }
  }
}

export default FreelancersPanelController
