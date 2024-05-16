"use client"
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface PropsType {
  children: ReactNode
}

const AuthProvider = ({children}: PropsType) => {
  return (
    <div>AuthProvider</div>
  )
}

export default AuthProvider