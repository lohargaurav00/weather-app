import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcypt from "bcryptjs";

import { connectMongoDB } from "@/lib/monogdb";
import User from "@/models/user";

type Credentials = {
  email: string;
  password: string;
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      // @ts-ignore
      async authorize(credentials: Credentials) : Promise<any | null> {
        try {
          const { email, password } = credentials;
          await connectMongoDB();

          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }
          // @ts-ignore
          const isValidPassword = await bcypt.compare(password, user.password);
          if (!isValidPassword) {
            return null;
          }
          return user;
        } catch (error) {
          console.error("Error during authentication:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
