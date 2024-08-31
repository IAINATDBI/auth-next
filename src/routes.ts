/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = [
  '/',
  '/auth/new-verification',
  '/contact', // Add this line
]

/**
 * An array of routes that are used for authentication.
 * The login will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  '/auth/login',
  '/auth/register',
  '/auth/error',
  '/auth/reset',
  '/auth/new-password',
]

/**
 * The prefix for authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth'

/**
 * An array of API routes that are accessible but may require authentication.
 * @type {string[]}
 */
export const apiRoutes = [
  '/api/stripe/create-checkout-session',
]

/**
 * The default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/rejob'

/**
 * An array of routes that require authentication.
 * @type {string[]}
 */
export const protectedRoutes = [
  '/rejob',
  '/rejob/dash',
  // Add any other protected routes here
]

