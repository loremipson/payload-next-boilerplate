import path from 'path'
import next from 'next'
import nextBuild from 'next/dist/build'
import express from 'express'
import payload from 'payload'
import { config as dotenv } from 'dotenv'

dotenv({
  path: path.resolve(__dirname, './.env'),
})

const dev = process.env.NODE_ENV !== 'production'
const server = express()

payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: server,
})

if (!process.env.NEXT_BUILD) {
  const nextApp = next({ dev })

  const nextHandler = nextApp.getRequestHandler()

  server.get('*', (req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    server.listen(3000)
  })
} else {
  server.listen(3000, async () => {
    await nextBuild(path.join(__dirname, '../'))
    process.exit()
  })
}
