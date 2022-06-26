import { buildConfig } from 'payload/config'
import path from 'path'
import dotenv from 'dotenv'
import Users from './collections/Users'

dotenv.config()

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
