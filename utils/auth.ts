

import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key'; // Your secret key from .env

export function verifyToken(request: Request, secret: string): any {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) throw new Error('Authorization header is missing');

  const token = authHeader.split(' ')[1]; // Assumes format "Bearer <token>"
  if (!token) throw new Error('Token is missing');

  try {
    const decoded = jwt.verify(token, secret); // Pass the secret key for verification
    return decoded;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
}
