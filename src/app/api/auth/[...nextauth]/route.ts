import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";

interface CallbackUrlOptions {
    baseUrl: string
    url: string
}

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    callbacks: {
        async redirect({ url, baseUrl } : CallbackUrlOptions) {
          return url.startsWith(baseUrl) ? `${baseUrl}/dashboard` : baseUrl
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }