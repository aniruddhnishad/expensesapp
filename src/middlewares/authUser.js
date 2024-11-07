import appConfig from '../config/appConfig.js'

import helpers from '../helpers/helpers.js'

const authFreelancer = async (req, res, next) => {
  try {
    const first_name = req?.first_name
      ? req?.first_name
      : req?.role?.toLowerCase()

    const middle_name = req?.middle_name ? req?.middle_name : ''

    const last_name = req?.last_name ? req?.last_name : ''

    const nick_name = req?.nick_name ? req?.nick_name : ''

    const user_id = req.user_id ? req.user_id : 0

    const u_id = req?.u_id ? req?.u_id : '0'

    const email = req?.email ? req?.email : ''

    const role = req?.role ? req?.role : 'OTHER'

    const roles = req?.roles ? req?.roles : []

    const jwtApiKey = req?.jwtApiKey ? req?.jwtApiKey : ''

    const jwtKey = req?.jwtKey ? req?.jwtKey : ''

    const assignment_user = req?.assignment_user ? req?.assignment_user : 0

    const user_website_data = req?.user_website_data
      ? req?.user_website_data
      : []

    const cookieSecret = req?.cookieSecret ? req?.cookieSecret : ''

    const axiosAuthData = {
      url: `${appConfig.FREELANCERS_API}/api/v1/auth/freelancer`,
      method: 'POST',
      data: {},
      headers: { authorization: `Bearer ${req.jwtApiKey}` },
    }

    const dataAuth = await helpers.runAxios(axiosAuthData)

    if (dataAuth.error) {
      if (dataAuth.data === 'USER_NOT_FOUND') {
        res.cookie('authenticatedlcfreelancer', '', {
          path: '/',
          secure: false,
          httpOnly: true,
          expires: new Date(Date.now() - 60 * 60 * 1000),
        })

        req.flash('messages', 'User not found!')

        return res.redirect('/')
      }

      if (dataAuth.data === 'USER_STATUS_INACTIVE') {
        res.cookie('authenticatedlcfreelancer', '', {
          path: '/',
          secure: false,
          httpOnly: true,
          expires: new Date(Date.now() - 60 * 60 * 1000),
        })

        req.flash('messages', 'User status inactive!')

        return res.redirect('/')
      }

      if (dataAuth.data === 'USER_STATUS_BAN') {
        res.cookie('authenticatedlcfreelancer', '', {
          path: '/',
          secure: false,
          httpOnly: true,
          expires: new Date(Date.now() - 60 * 60 * 1000),
        })

        req.flash('messages', 'User status banned!')

        return res.redirect('/')
      }

      if (dataAuth.data === 'USER_STATUS_DELETED') {
        res.cookie('authenticatedlcfreelancer', '', {
          path: '/',
          secure: false,
          httpOnly: true,
          expires: new Date(Date.now() - 60 * 60 * 1000),
        })

        req.flash('messages', 'User marked deleted!')

        return res.redirect('/')
      }

      if (dataAuth.data === 'UNAUTHORIZED_INVALID_TOKEN') {
        res.cookie('authenticatedlcfreelancer', '', {
          path: '/',
          secure: false,
          httpOnly: true,
          expires: new Date(Date.now() - 60 * 60 * 1000),
        })

        req.flash('messages', 'Unauthorized invalid token!')

        return res.redirect('/')
      }

      throw new Error(dataAuth.data)
    }

    const axiosAssignmentsToken = dataAuth.data

    req.first_name = first_name

    req.middle_name = middle_name

    req.last_name = last_name

    req.nick_name = nick_name

    req.user_id = user_id

    req.u_id = u_id

    req.email = email

    req.role = role

    req.roles = roles

    req.jwtApiKey = jwtApiKey

    req.jwtKey = jwtKey

    req.assignment_user = assignment_user

    req.user_website_data = user_website_data

    req.cookieSecret = cookieSecret

    req.axiosAssignmentsToken = axiosAssignmentsToken

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

export default authFreelancer
