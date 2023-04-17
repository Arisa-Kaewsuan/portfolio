import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title> mapleJourney </title>
      </Head>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}
