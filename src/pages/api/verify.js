import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // "Bearer token"

    if (!token) {
        return res
            .status(401)
            .json({ message: 'Authentication token is missing' });
    }

    try {
        // Verify JWT
        jwt.verify(token, process.env.AUTH_JWT_SECRET);
        res.status(200).json({ message: 'Login succcess' });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
}
