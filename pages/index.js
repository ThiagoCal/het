import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Rsvp from '../components/RSVP'
import Local from '../components/Local'


export default function Home() {
  return (
    <><Head>
      <title>HeT</title>
      <meta name="description" content="Casamento HeT" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container}>
        <Nav />
        <Rsvp />
        <Local />
    </div></>
  )
}
