import Head from 'next/head';
import { Header } from '@/layouts/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>つぶやきくん</title>
        <meta name="description" content="つぶやきくん" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
    </>
  );
}
