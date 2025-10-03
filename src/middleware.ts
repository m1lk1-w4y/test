import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET_KEY = new TextEncoder().encode(process.env.TOKEN_SECRET); // Your secret key

export async function middleware(request: NextRequest) {
      const jwttoken = request.cookies.get("token"); // Get token from cookie
      console.log(jwttoken)

      if (!jwttoken) {
            // Redirect to login if no token
            return NextResponse.redirect(new URL('/auth/login', request.url));
      }

      try {
            // Verify the token
            await jwtVerify(jwttoken.value, SECRET_KEY);
            // return NextResponse.next(); // Continue to the requested route
            return NextResponse.redirect(new URL('/admin/heros', request.url));
      } catch (error) {
            // Redirect to login if token is invalid or expired
            return NextResponse.redirect(new URL('/auth/login', request.url));
      }
}

export const config = {
      matcher: ['/admin/:path*', '/api/admin/:path*'], // Apply middleware to specific routes
};

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//     const token = request.cookies.get('sessionToken'); // Assuming HttpOnly cookie
//     if (!token && request.nextUrl.pathname.startsWith('/protected')) {
//         return NextResponse.redirect(new URL('/login', request.url));
//     }
//     return NextResponse.next();
// }


      // Example Axios interceptor
      // import axios from 'axios';

      // axios.interceptors.request.use(config => {
      //     const token = localStorage.getItem('token'); // Or retrieve from cookie
      //     if (token) {
      //         config.headers.Authorization = `Bearer ${token}`;
      //     }
      //     return config;
      // });
