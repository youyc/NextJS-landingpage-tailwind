import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

/* Import Component */
import HeaderBarTW from "src/components/HeaderBarTW"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderBarTW></HeaderBarTW>

      <p className=" text-black font-extrabold text-3xl md:text-5xl">
        Ghostwind CSS
      </p>
    </div>
  )
}

export default Home
