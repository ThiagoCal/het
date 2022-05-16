import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Rsvp from '../components/RSVP'
import Local from '../components/Local'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HeT</title>
        <meta name="description" content="Casamento HeT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Rsvp/>
      <Local
    </div>
  )
}
