// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcryptjs";

// const prisma = new PrismaClient();

// export const authOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         // Check if credentials are provided
//         if (!credentials?.email || !credentials?.password) {
//           throw new Error("Missing email or password");
//         }

//         // Find the user by email
//         const user = await prisma.user.findUnique({
//           where: { email: credentials.email },
//         });

//         // Verify the password
//         if (user && bcrypt.compareSync(credentials.password, user.password)) {
//           return { id: user.id, email: user.email, name: user.name };
//         }

//         // If the credentials are invalid, return null
//         return null;
//       },
//     }),
//   ],
//   secret: process.env.SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signOut } from "next-auth/react";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Custom logic for verifying users
        const user = { id: "1", name: "John Doe", email: credentials?.email };
        return user || null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login", // Use your custom login page
    signOut: "/auth/logout", // Use your custom signout page
  },

};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
