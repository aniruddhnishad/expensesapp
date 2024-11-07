import * as jose from 'jose'

import bcrypt from 'bcrypt'

import appConfig from '../config/appConfig.js'

import helpers from '../helpers/helpers.js'

const authenticated = async (req, res, next) => {
  const authCookiesData = req.cookies.authenticatedlcfreelancer

  try {
    if (!authCookiesData) return res.redirect('/')

    const decryptedAuthCookiesData = helpers.cryptApi.decrypt(authCookiesData)

    const cookieData = JSON.parse(decryptedAuthCookiesData)

    if (!bcrypt.compareSync(appConfig.COOKIE_SECRET, cookieData.cookieSecret)) {
      res.cookie('authenticatedlcfreelancer', '', {
        path: '/',
        secure: false,
        httpOnly: true,
        expires: new Date(Date.now() - 60 * 60 * 1000),
      })

      req.flash('messages', 'Invalid Cookie!')

      return res.redirect('/')
    }

    const decryptedjwtKeyData = helpers.cryptApi.decrypt(cookieData.jwtKey)

    const claims = jose.decodeJwt(decryptedjwtKeyData)

    if (!claims) return res.json({ error: true, data: '/' })

    const decryptedjwtKey = claims?.data

    const jwtKeyData = decryptedjwtKey[0]

    req.first_name = jwtKeyData?.first_name
      ? jwtKeyData?.first_name
      : cookieData?.role?.toLowerCase()

    req.middle_name = jwtKeyData?.middle_name ? jwtKeyData?.middle_name : ''

    req.last_name = jwtKeyData?.last_name ? jwtKeyData?.last_name : ''

    req.nick_name = jwtKeyData?.nick_name ? jwtKeyData?.nick_name : ''

    req.user_id = jwtKeyData?.user_id ? jwtKeyData?.user_id : 0

    req.u_id = jwtKeyData?.u_id ? jwtKeyData?.u_id : '0'

    req.email = jwtKeyData?.email ? jwtKeyData?.email : ''

    req.role = cookieData?.role ? cookieData?.role : 'OTHER'

    req.roles = jwtKeyData?.roles ? JSON.parse(jwtKeyData?.roles) : []

    req.assignment_user = jwtKeyData?.assignment_user
      ? jwtKeyData?.assignment_user
      : 0

    req.user_website_data = jwtKeyData?.user_website_data
      ? JSON.parse(jwtKeyData?.user_website_data)
      : []

    req.jwtApiKey = cookieData.jwtKey ? cookieData.jwtKey : ''

    req.jwtKey = authCookiesData ? authCookiesData : ''

    req.cookieSecret = cookieData.cookieSecret ? cookieData.cookieSecret : ''

    await next()
  } catch (error) {
    console.log(error)

    res.render('errors/500', {
      title: '500 error!',
      h1: 'An error occured!',
      p1: error?.message,
    })
  }
}

export default authenticated
