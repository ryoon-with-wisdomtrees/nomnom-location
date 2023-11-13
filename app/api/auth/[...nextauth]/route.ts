import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

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
  pages: {
    signIn: "/login",
  },
  secret: process.env.SECRET, // SECRET env variable
});

export { handler as GET, handler as POST };
