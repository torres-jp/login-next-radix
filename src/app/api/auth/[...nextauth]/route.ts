import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'E-mail', type: 'email', placeholder: 'jhon Doe' },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: '********',
                },
            },
            async authorize() {
                return null
            },
        }),

    ],
    pages: {
        signIn: '/auth/login',
    }
})

export { handler as GET, handler as POST }
