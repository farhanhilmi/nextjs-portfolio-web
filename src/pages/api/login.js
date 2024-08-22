import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    const user = {
        id: process.env.AUTH_ID,
        email: process.env.AUTH_EMAIL,
        password: process.env.AUTH_PASSWORD,
    };

    if (email === user.email && password === user.password) {
        // Generate a JWT
        const token = jwt.sign({ id: user.id }, process.env.AUTH_JWT_SECRET, {
            expiresIn: '1h',
        });

        const isDev = process.env.IS_DEV;
        const cookiesKey = isDev
            ? `dev-${process.env.AUTH_COOKIES_KEY}`
            : process.env.AUTH_COOKIES_KEY;

        // Set JWT in a cookie (or return in response body)
        res.setHeader(
            'Set-Cookie',
            `${cookiesKey}=${token}; HttpOnly; Path=/; SameSite=Strict`,
        );

        return res.status(200).json({ message: 'Login successful' });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
}
