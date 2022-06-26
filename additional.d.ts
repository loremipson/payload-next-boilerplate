declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      MONGODB_URI: string
      NEXT_PUBLIC_SERVER_URL: string
      PAYLOAD_PUBLIC_SERVER_URL: string
      PAYLOAD_SECRET: string
    }
  }
}

export {}
