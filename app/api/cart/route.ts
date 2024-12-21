
import { NextResponse } from 'next/server';
import { verifyToken } from '@/utils/auth';
import prisma from '@/utils/db';

// Define the type of your JWT payload
interface JWTPayload {
  id: string;
  username: string;
}

export async function GET(request: Request) {
  try {
    const user = verifyToken(request, process.env.JWT_SECRET || 'your_secret_key'); // Pass the secret key here

    const cartItems = await prisma.cart.findMany({
      where: { userId: user.id }, // Now user has the correct id property
      include: { product: true },
    });

    return NextResponse.json(cartItems);
  } catch (error) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
