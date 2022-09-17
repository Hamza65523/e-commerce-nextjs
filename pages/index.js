import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Products from './products'
export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Products/>
     
    </div>
  )
}
