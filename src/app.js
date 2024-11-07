import express from 'express'

import rateLimit from 'express-rate-limit'

import cors from 'cors'

import * as dotenv from 'dotenv'

dotenv.config()

import cookieParser from 'cookie-parser'

import session from 'express-session'

import path from 'path'

import flash from 'connect-flash'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

import defaultRouter from './routes/defaultRouter.js'

import freelancersPanelRouter from './routes/freelancersPanelRouter.js'

import testRouter from './routes/testRouter.js'

const PORT = process.env.PORT || 3000

const app = express()

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 1000, // Limit each IP to 1000 requests per `window` (here, per 10 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.disable('x-powered-by')

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.set('trust proxy', 1) // trust first proxy

app.use(express.static(path.join(__dirname, 'public')))

app.use(
  session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: process.env.SESSION_SECRET_KEY || 'aa',
    // name: 'sessionId',
    //store: sessionStorage,
    cookie: {
      maxAge: 60 * 60 * 24 * 1000,
    },
  }),
)

app.use(cors())

app.use(cookieParser())

app.use(limiter)

app.use(express.json({ limit: '100mb' }))

app.use(express.urlencoded({ limit: '100mb', extended: true }))

app.use(flash())

app.use('/', defaultRouter)

app.use('/dashboard/freelancer', freelancersPanelRouter)

app.use('/dashboard/test', testRouter)

app.all('*', (req, res) =>
  res.status(404).render('errors/error', { title: 'error found!' }),
)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

export default app
