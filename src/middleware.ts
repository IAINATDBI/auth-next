import NextAuth from "next-auth"
import { NextResponse } from 'next/server'

import authConfig from "@/auth.config"
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  apiRoutes,
  protectedRoutes,
} from '@/routes'

const { auth } = NextAuth(authConfig)
 
export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isApiRoute = nextUrl.pathname.startsWith('/api/')
  const isProtectedRoute = protectedRoutes.some(route => nextUrl.pathname.startsWith(route))

  console.log('Middleware: Pathname', nextUrl.pathname)
  console.log('Middleware: isApiAuthRoute', isApiAuthRoute)
  console.log('Middleware: isApiRoute', isApiRoute)
  console.log('Middleware: isAuthRoute', isAuthRoute)
  console.log('Middleware: isPublicRoute', isPublicRoute)
  console.log('Middleware: isLoggedIn', isLoggedIn)

  if (isApiAuthRoute || isApiRoute) {
    console.log("Fired rule 1")
    return null // Allow all API requests to proceed without middleware interference
  }

  if (isAuthRoute) {
    console.log("Fired rule 2")
    if (isLoggedIn) {
      console.log("Fired rule 2.1")
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return null
  }

  if (!isLoggedIn && (isProtectedRoute || !isPublicRoute)) {
    console.log("Fired rule 3")
    return NextResponse.redirect(new URL('/auth/login', nextUrl))
  }
  console.log("Fired rule 4")
  return null
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};