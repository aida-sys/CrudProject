This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


   tahapan membuat data base dengan prisma
   1. install prisma sebagai Devdepedencies; npm install -D prisma
   2. install prisma client  : npm install  @prisma/client
   3. inisialisasi prisma : prisma init, akan ada tambahan folder baru,  'prisma' yg di dalamnya ada file 
      'prisma  schema
    4. kita akan menyimpan databasenya di vercel dengan menggunakan potsgres.
    5. buka situs vercel, klik dashboard, lalu tab storage, kemudian pilih create database dan plih postgress
    6. setelah database berhasil dibuat, instalasi koneksi database vercel dengan komputer lokal
    7. pada bagian quickstar, pilih tab .env.local. kemudian klick tab showsecret untuk menampilkan snipet codenya,
       kemudian copy dan paste pada vs code di file .env dengan me-replace konfigurasi koneksi yang ada di file .env
    8. pastikan file .env tidak di posh ke github dengan menambahkan settingan ; .env di file gitignore bagian 
       local env file
    9. setting koneksi database vercel dengan project local kita dengan menambahkan kode yg berasal dari tab prisma,
      copy  & paste kodenya di prisma ---> schema prisma, replace bagian code url dengan kode dari vercel
    10. tinggal buat model datanya