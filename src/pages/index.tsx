import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Intro from "@/components/Intro";

import Navbar from '../components/NavBar'
import HomeCarousel from "@/components/HomeCarousel";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>Vashon Build | Serving Vashon Island and Beyond</title>
        <meta name="description" content="Vashon based construction company." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.container}>
            <HomeCarousel />
        </div>
          <Intro />
      </main>
    </>
  )
}
