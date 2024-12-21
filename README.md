This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Prisma Connection

// This is your Prisma schema file

// Define the generator for Prisma Client
generator client {
  provider = "prisma-client-js"
}

// Define the data source for your database (you can use PostgreSQL, MySQL, SQLite, etc.)
datasource db {
  provider = "postgresql" // Or any other supported database (e.g., "mysql", "sqlite")
  url      = env("DATABASE_URL") // Ensure this is set in your .env file
}

// Define the User model
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  name      String
  createdAt DateTime @default(now())
  cart      Cart[]   // A user can have many items in their cart (one-to-many relationship)
  orders    Order[]  // A user can place many orders (one-to-many relationship)
}

// Define the Product model
model Product {
  id          String   @id @default(uuid())
  name        String
  price       Float
  description String
  imageUrl    String
  category    String
  cartItems   Cart[]   // A product can appear in many carts (one-to-many relationship)
}

// Define the Cart model
model Cart {
  id        String   @id @default(uuid())
  userId    String
  productId String
  user      User     @relation(fields: [userId], references: [id]) // Link to the User
  product   Product  @relation(fields: [productId], references: [id]) // Link to the Product
}

// Define the Order model
model Order {
  id        String   @id @default(uuid())
  userId    String
  total     Float
  status    String
  createdAt DateTime @default(now())
  user      User     @relation(fields: [userId], references: [id]) // Link to the User
}

### Run migration

`npx prisma migrate dev --name init`
