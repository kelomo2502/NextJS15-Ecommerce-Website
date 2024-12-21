import Stripe from "stripe";

// Ensure the environment variable is set
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("Stripe Secret Key is missing. Please set STRIPE_SECRET_KEY in your environment variables.");
}

export const stripe = new Stripe(stripeSecretKey);
