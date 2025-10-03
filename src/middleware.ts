import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose'; // Or 'jsonwebtoken'

export async function middleware(request) {
 const token = request.cookies.get('token'); // Assuming JWT is stored in a cookie named 'session-token'

 // Define public paths that don't require authentication
 const publicPaths = ['/auth/login', '/auth/register'];

 if (publicPaths.includes(request.nextUrl.pathname)) {
  // If it's a public path, allow access
  return NextResponse.next();
 }

 if (!token) {
  // If no token and not a public path, redirect to login
  return NextResponse.redirect(new URL('/auth/login', request.url));
 }

 try {
  // Verify the JWT
  const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);
  await jwtVerify(token.value, secret); // Replace with your secret key

  // If valid, allow the request to proceed
  return NextResponse.next();
 } catch (error) {
  console.error('JWT verification failed:', error);
  // If verification fails, redirect to login
  return NextResponse.redirect(new URL('/login', request.url));
 }
}

// Define the routes the middleware should apply to
// export const config = {
//  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'], // Apply to all routes except API routes, static assets, etc.
// };

export const config = {
 matcher: ['/admin/:path*', '/api/admin/:path*'], // Apply middleware to specific routes
};