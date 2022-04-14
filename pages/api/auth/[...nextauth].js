import NextAuth from "next-auth";
// import Providers from "next-auth/providers";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.SECRET,

  callbacks: {
    async jwt(token, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    redirect: async (url, _baseUrl) => {
      if (url === "/") {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    },
  },
  // providers: [
  //   Providers.GitHub({
  //     clientId: process.env.GITHUB_ID,
  //     clientSecret: process.env.GITHUB_SECRET,
  //   }),
  // ],
  database: process.env.DB_URL,

  // session: {
  //   jwt: true,
  // },
  // jwt: {
  //   secret: "abcddeeff",
  // },
  // callbacks: {
  //   async jwt(token, user) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   async session(session, token) {
  //     session.user.id = token.id;
  //     return session;
  //   },
  // },
});
