import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { OAuthUserConfig } from "next-auth/providers/oauth";

// const GoogleProfile: OAuthUserConfig<any> = {
//   clientId: process.env.GOOGLE_CLIENT_ID || "",
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
// };
//
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
});

export { handler as GET, handler as POST };
