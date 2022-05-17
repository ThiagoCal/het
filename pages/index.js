import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Rsvp from '../components/RSVP'
import React, { useEffect } from "react";
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Main from '../components/Main'
import Countdown from '../components/Countdown'

export default function Home() {

  // See https://en.reactjs.org/docs/hooks-effect.html
  useEffect(() => {

      // Run code on client-side only : ensure document is here
      if (typeof document !== undefined) {

        // load JS bootstrap dependency
        require('bootstrap/dist/js/bootstrap')


      }
  // Run useEffect only once
  // Read https://css-tricks.com/run-useeffect-only-once/
  }, [])

  return (
    <div>
      <Head>
        <title>HeT</title>
        <meta name="description" content="Casamento HeT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <div className={styles.container}>
        <br/>
        <Banner/>
        <Main />
        <Countdown />
        <br/>
        <br/>
        <Rsvp/>
        <br/>

      </div>
      <Footer/>
    </div>
  )
}
