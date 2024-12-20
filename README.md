# Next.js 15 Authentication with NextAuth.js v5

A starter template for setting up authentication in Next.js 15 using NextAuth.js v5. This project demonstrates both Server Component and Client Component approaches for implementing authentication.

For more details read my [Medium post](https://chamith.medium.com/setting-up-authentication-in-next-js-15-using-nextauth-js-v5-264f54d5471f)

---

## **Features**

- GitHub authentication using NextAuth.js v5
- Server Component-based authentication with Server Actions
- Client Component-based authentication example
- Easily extensible for other authentication providers

---

## **Getting Started**

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/chambits/next-auth-intro.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up GitHub OAuth App

- Go to [GitHub Developer Settings](https://github.com/settings/developers).
- Create a new OAuth app and set the callback URL to: http://localhost:3000/api/auth/callback/github

4. Add credentials to the .env.local file:

   ```env
   NEXTAUTH_SECRET=your-nextauth-secret
   GITHUB_ID=your-github-client-id
   GITHUB_SECRET=your-github-client-secret
   ```

5. Run in dev mode

   ```bash
   npm run dev
   ```
