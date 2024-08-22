import { NextResponse } from 'next/server';

export async function middleware(request) {
    const verifyUrl = new URL('/api/verify', request.url).toString();
    const isDev = process.env.IS_DEV;
    const cookiesKey = isDev
        ? `dev-${process.env.AUTH_COOKIES_KEY}`
        : process.env.AUTH_COOKIES_KEY;

    const token = request.cookies.get(cookiesKey)?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    try {
        const res = await fetch(verifyUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            credentials: 'include', // Ensure cookies are included if needed
        });

        if (res.ok) {
            return NextResponse.next();
        }
    } catch (err) {
        return NextResponse.redirect(new URL('/', request.url));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/dashboard/:path*',
};
