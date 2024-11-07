import * as dotenv from 'dotenv'

dotenv.config()

import zod from 'zod'

import * as jose from 'jose'

import axios from 'axios'

import fs from 'fs'

import path from 'path'

import ejs from 'ejs'

import { fileURLToPath } from 'url'

import bcrypt from 'bcrypt'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

import appConfig from '../config/appConfig.js'

import helpers from '../helpers/helpers.js'

class DefaultController {
  constructor() {}

  /////////////////////////////////////////////////////////////////////////////////////

  /* Add user/index */

  /////////////////////////////////////////////////////////////////////////////////////
  index = async (req, res) => {
    try {
      const authCookiesData = req.cookies.authenticatedlcfreelancer

      if (!authCookiesData) {
        return res.render('index', {
          title: 'Login | Freelancers Panel',
          roles: req?.roles,
          messages: req.flash('messages'),
          appConfig: appConfig,
        })
      }

      const decryptedAuthCookiesData = helpers.cryptApi.decrypt(authCookiesData)

      const cookieData = JSON.parse(decryptedAuthCookiesData)

      if (
        !bcrypt.compareSync(appConfig.COOKIE_SECRET, cookieData.cookieSecret)
      ) {
        res.cookie('authenticatedlcfreelancer', '', {
          path: '/',
          secure: false,
          httpOnly: true,
          expires: new Date(Date.now() - 60 * 60 * 1000),
        })

        req.flash('messages', 'Invalid Cookie!')

        return res.redirect('/')
      }

      return res.redirect('/dashboard')
    } catch (error) {
      console.log(error)

      res.render('errors/500', { title: '500 error!' })
    }
  }

  login = async (req, res) => {
    try {
      const email = req.body.email
        ? typeof req.body.email == 'string'
          ? req.body.email.trim().toLowerCase()
          : req.body.email
        : req.body.email

      const password = req.body.password
        ? typeof req.body.password == 'string'
          ? req.body.password.trim()
          : req.body.password
        : req.body.password

      const reqBody = { email, password }

      const zodObj = zod.object({
        email: zod.string().email().min(4).max(100),
        password: zod.string().min(5).max(100),
      })

      zodObj.parse(reqBody)

      const axiosData = {
        url: `${appConfig.FREELANCERS_API}/api/v1/loginfreelancerbyapp`,
        method: 'POST',
        data: reqBody,
        headers: {
          authorization: `Bearer ${appConfig.FREELANCERS_API_APP_TOEKN}`,
        },
      }

      const response = await axios(axiosData)

      const data = response.data

      if (data.error) {
        if (data.data === 'USER_NOT_FOUND') {
          req.flash('messages', 'User not found!')

          return res.json({ error: true, data: 'User not found!' })
        }

        if (data.data === 'USER_STATUS_INACTIVE') {
          req.flash('messages', 'User not found!')

          return res.json({ error: true, data: 'User status inactive!' })
        }

        if (data.data === 'USER_STATUS_BAN') {
          req.flash('messages', 'User not found!')

          return res.json({ error: true, data: 'User status banned!' })
        }

        if (data.data === 'USER_STATUS_DELETED') {
          req.flash('messages', 'User not found!')

          return res.json({ error: true, data: 'User marked deleted!' })
        }

        throw new Error(data.data)
      }

      const jwtKey = data.data

      const decryptedjwtKeyData = helpers.cryptApi.decrypt(jwtKey)

      const claims = jose.decodeJwt(decryptedjwtKeyData)

      if (!claims) return res.json({ error: true, data: '/' })

      const decryptedjwtKey = claims?.data

      const jwtKeyData = decryptedjwtKey[0]

      const roles = jwtKeyData?.roles ? JSON.parse(jwtKeyData?.roles) : []

      const cookiesData = {
        jwtKey,
        role: roles[0],
        cookieSecret: bcrypt.hashSync(appConfig.COOKIE_SECRET, 10),
      }

      res.cookie(
        'authenticatedlcfreelancer',
        helpers.cryptApi.encrypt(JSON.stringify(cookiesData)),
        {
          path: '/',
          secure: false,
          httpOnly: true,
          expires: new Date(Date.now() + 60 * 60 * 24 * 30 * 1000),
        },
      )

      req.flash('messages', 'Login Successfull!')

      return res.redirect('/dashboard')
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

  switchRole = async (req, res) => {
    try {
      const role_new = req.body.role_new
        ? typeof req.body.role_new == 'string'
          ? req.body.role_new.trim().toUpperCase()
          : req.body.role_new
        : req.body.role_new

      const reqBody = { role_new }

      const zodObj = zod.object({
        role_new: zod.string().min(1).max(100),
      })

      zodObj.parse(reqBody)

      const axiosData = {
        url: `${appConfig.FREELANCERS_API}/api/v1/switchrole`,
        method: 'POST',
        data: {},
        headers: { authorization: `Bearer ${req.jwtApiKey}` },
      }

      const response = await axios(axiosData)

      const data = response.data

      if (data.error) {
        if (data.data === 'USER_NOT_FOUND') {
          res.cookie('authenticatedlcfreelancer', '', {
            path: '/',
            secure: false,
            httpOnly: true,
            expires: new Date(Date.now() - 60 * 60 * 1000),
          })

          req.flash('messages', 'User not found!')

          return res.json({ error: true, data: 'User not found!' })
        }

        if (data.data === 'USER_STATUS_INACTIVE') {
          res.cookie('authenticatedlcfreelancer', '', {
            path: '/',
            secure: false,
            httpOnly: true,
            expires: new Date(Date.now() - 60 * 60 * 1000),
          })

          req.flash('messages', 'User not found!')

          return res.json({ error: true, data: 'User status inactive!' })
        }

        if (data.data === 'USER_STATUS_BAN') {
          res.cookie('authenticatedlcfreelancer', '', {
            path: '/',
            secure: false,
            httpOnly: true,
            expires: new Date(Date.now() - 60 * 60 * 1000),
          })

          req.flash('messages', 'User not found!')

          return res.json({ error: true, data: 'User status banned!' })
        }

        if (data.data === 'USER_STATUS_DELETED') {
          res.cookie('authenticatedlcfreelancer', '', {
            path: '/',
            secure: false,
            httpOnly: true,
            expires: new Date(Date.now() - 60 * 60 * 1000),
          })

          req.flash('messages', 'User not found!')

          return res.json({ error: true, data: 'User marked deleted!' })
        }

        if (data.data === 'UNAUTHORIZED_INVALID_TOKEN') {
          res.cookie('authenticatedlcfreelancer', '', {
            path: '/',
            secure: false,
            httpOnly: true,
            expires: new Date(Date.now() - 60 * 60 * 1000),
          })

          req.flash('messages', 'Unauthorized invalid token!')

          return res.redirect('/')
        }

        throw new Error(data.data)
      }

      const jwtKey = data.data

      const decryptedjwtKeyData = helpers.cryptApi.decrypt(jwtKey)

      const claims = jose.decodeJwt(decryptedjwtKeyData)

      if (!claims) return res.json({ error: true, data: '/' })

      const decryptedjwtKey = claims?.data

      const jwtKeyData = decryptedjwtKey[0]

      const roles = jwtKeyData?.roles ? JSON.parse(jwtKeyData?.roles) : []

      const role = roles.includes(role_new) ? role_new : roles[0]

      const cookiesData = {
        jwtKey,
        role,
        cookieSecret: bcrypt.hashSync(appConfig.COOKIE_SECRET, 10),
      }

      res.cookie('authenticatedlcfreelancer', '', {
        path: '/',
        secure: false,
        httpOnly: true,
        expires: new Date(Date.now() - 60 * 60 * 1000),
      })

      res.cookie(
        'authenticatedlcfreelancer',
        helpers.cryptApi.encrypt(JSON.stringify(cookiesData)),
        {
          path: '/',
          secure: false,
          httpOnly: true,
          expires: new Date(Date.now() + 60 * 60 * 24 * 30 * 1000),
        },
      )

      req.flash('messages', 'Role Switched Successfull!')

      return res.redirect('/dashboard')
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

  dashboard = async (req, res) => {
    try {
      if (req.jwtKey) {
        if (!bcrypt.compareSync(appConfig.COOKIE_SECRET, req.cookieSecret))
          return res.render('index', {
            title: 'Login | Freelancers Panel',
            appConfig: appConfig,
          })

        const dashboardData = ''

        const dataObj = {
          appConfig: appConfig,
        }

        Object.assign(dashboardData, dataObj)

        res.render(`dashboard/${req.role.toLowerCase()}/index`, dashboardData)
      } else {
        req.flash('messages', 'Unauthorized!')

        return res.render('index', {
          title: 'Login | Freelancers Panel',
          roles: req?.roles,
          messages: req.flash('messages'),
        })
      }
    } catch (error) {
      console.log(error)

      res.render('errors/500', {
        title: '500 error!',
        h1: 'An error occured!',
        p1: error?.message,
      })
    }
  }

  logout = async (req, res) => {
    try {
      const jwtApiKey = req.jwtApiKey ? req.jwtApiKey : ''

      const jwtKey = req.jwtKey ? req.jwtKey : ''

      if (!jwtKey) return res.redirect('/')

      const axiosData = {
        url: `${appConfig.FREELANCERS_API}/api/v1/logoutFreelancer`,
        method: 'POST',
        data: {},
        headers: { authorization: `Bearer ${jwtApiKey}` },
      }

      const response = await axios(axiosData)

      const data = response.data

      if (data.error) return res.json(data)

      res.cookie('authenticatedlcfreelancer', '', {
        path: '/',
        secure: false,
        httpOnly: true,
        expires: new Date(Date.now() - 60 * 60 * 1000),
      })

      req.flash('messages', 'Logout successfull!')

      return res.redirect('/')
    } catch (error) {
      console.log(error)

      res.json({ error: true, data: error?.message })
    }
  }

  logoutAllDevices = async (req, res) => {
    try {
      const email = req.body.email
        ? typeof req.body.email == 'string'
          ? req.body.email.trim().toLowerCase()
          : req.body.email
        : req.body.email

      const password = req.body.password
        ? typeof req.body.password == 'string'
          ? req.body.password.trim()
          : req.body.password
        : req.body.password

      const reqBody = { email, password }

      const zodObj = zod.object({
        email: zod.string().email().min(4).max(100),
        password: zod.string().min(5).max(100),
      })

      zodObj.parse(reqBody)

      const axiosData = {
        url: `${appConfig.FREELANCERS_API}/api/v1/logoutalldevices`,
        method: 'POST',
        data: { email, password },
        headers: {
          authorization: `Bearer ${appConfig.FREELANCERS_API_APP_TOEKN}`,
        },
      }

      const response = await axios(axiosData)

      const data = response.data

      if (data.error) return res.json(data)

      return res.json(data)
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

  getUploadUrl = async (req, res) => {
    try {
      if (!req?.jwtKey) return res.redirect('/')

      const bucket_name = req.body.bucket_name
        ? typeof req.body.bucket_name == 'string'
          ? req.body.bucket_name.trim()
          : req.body.bucket_name
        : req.body.bucket_name

      const name = req.body.name
        ? typeof req.body.name == 'string'
          ? req.body.name.trim()
          : req.body.name
        : req.body.name

      const size = req.body.size

      const reqBody = { bucket_name, name, size }

      const zodObj = zod.object({
        bucket_name: zod.string().max(100),
        name: zod.string(),
        size: zod.number().int(),
      })

      zodObj.parse(reqBody)

      const axiosData = {
        url: `${appConfig.ASSIGNMENTS_API}/api/v1/getuploadurlbyapp`,
        method: 'POST',
        data: reqBody,
        headers: {
          authorization: `Bearer ${appConfig.ASSIGNMENTS_API_APP_TOKEN}`,
        },
      }

      const response = await axios(axiosData)

      const responseData = response.data

      if (responseData.error) return res.json(responseData)

      return res.json(responseData)
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

  deleteAttachment = async (req, res) => {
    try {
      if (!req?.jwtKey) return res.redirect('/')

      const bucket_name = req.body.bucket_name
        ? typeof req.body.bucket_name == 'string'
          ? req.body.bucket_name.trim()
          : req.body.bucket_name
        : req.body.bucket_name

      const file_id = req.body.file_id
        ? typeof req.body.file_id == 'string'
          ? req.body.file_id.trim()
          : req.body.file_id
        : req.body.file_id

      const reqBody = { bucket_name, file_id }

      const zodObj = zod.object({
        bucket_name: zod.string().max(100),
        file_id: zod.string(),
      })

      zodObj.parse(reqBody)

      const axiosData = {
        url: `${appConfig.ASSIGNMENTS_API}/api/v1/deletes3objectbyapp`,
        method: 'POST',
        data: reqBody,
        headers: {
          authorization: `Bearer ${appConfig.ASSIGNMENTS_API_APP_TOKEN}`,
        },
      }

      const response = await axios(axiosData)

      const responseData = response.data

      if (responseData.error) return res.json(responseData)

      return res.json(responseData)
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

 
 
 
  flash = async (req, res) => {
    try {
      req.flash('info', 'Flash is back!')
      setTimeout(() => {
        res.redirect('/flashtest')
      }, 3000)
    } catch (error) {
      return res.json({ error: true, data: error?.message })
    }
  }

  flashTest = async (req, res) => {
    try {
      res.render('flashtest', { messages: req.flash('info') })
    } catch (error) {
      return res.json({ error: true, data: error?.message })
    }
  }

  test = async (req, res) => {
    try {
      return res.json('test')
    } catch (error) {
      return res.json({ error: true, data: error?.message })
    }
  }
}

export default DefaultController
