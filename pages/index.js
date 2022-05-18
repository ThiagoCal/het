import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Image from "next/image"
import Nav from '../components/Nav'
import Rsvp from '../components/RSVP'
import React, { useEffect } from "react";
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Main from '../components/Main'
import Countdown from '../components/Countdown'
import desktopImage from '../public/backgroundpurple.png'
import mobileImage from '../public/mobilepurple.png'

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

  const imageUrl = useWindowWidth >= 650 ? desktopImage : mobileImage;

  return (
    <div>
      <Head>
        <title>HeT</title>
        <meta name="description" content="Casamento HeT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <div style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: 'no-repeat',

        }}>

        <br/>
        <Banner/>
        <Main/>
        <Countdown/>
        <br/>
        <br/>
        <Rsvp/>
        <br/>
      </div>
      <Footer/>
    </div>
  )
}

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize);
  },[]);

  return windowWidth;
};
