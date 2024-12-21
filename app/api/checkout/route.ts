import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  const { cart } = await req.json();
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: cart.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.name, images: [item.imageUrl] },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    })),
    mode: "payment",
    success_url: `${process.env.BASE_URL}/checkout/success`,
    cancel_url: `${process.env.BASE_URL}/checkout/cancel`,
  });

  return new Response(JSON.stringify({ url: session.url }), { status: 200 });
}
