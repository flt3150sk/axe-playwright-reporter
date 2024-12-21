import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { authConfig } from "./auth.config"

const USER = {
  email: "test@example.com",
  password: "password",
}

export const auth = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (credentials.email !== USER.email || credentials.password !== USER.password) {
          throw new Error(`Invalid credentials, ${credentials.password}`);
        }

        return USER
      },
    }),
  ],
})
