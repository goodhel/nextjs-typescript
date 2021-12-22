This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Prettier

Open [Prettier](https://prettier.io/docs/en/install.html) for documentation installation

This is step by step how to configure prettier

1. yarn add --dev --exact prettier
2. echo {}> .prettierrc.json

   add this inside .prettierrc.json

   ```
   {
       "singleQuote": true,
       "arrowParens": "always",
       "printWidth": 120,
       "tabWidth": 2,
       "semi": false,
       "trailingComma": "none"
   }

   ```

   u can modify this file to fit your usage

3. echo {}> .prettierignore

   add this inside .prettierignore

   ```
   # Ignore artifacts:
   build
   coverage
   ```

4. yarn prettier --config .prettierrc.json --write \*_/_.tsx

## Husky and Lint Staged

1. yarn add --dev husky lint-staged
2. npx husky install
3. npm set-script prepare "husky install"
4. npx husky add .husky/pre-commit "npx lint-staged"
