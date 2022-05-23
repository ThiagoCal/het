// import Document, { Html, Body, NextScript } from 'next/document'
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Image from "next/image"
import Nav from '../components/Nav'
import Rsvp from '../components/RSVP'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Main from '../components/Main'
import Local from '../components/Local'
import Countdown from '../components/Countdown'
import desktopImage from '../public/backgroundpurple-rm.png'
import mobileImage from '../public/mobilebg-rm2.png'
import { useState, useEffect } from 'react';





export default function Home() {

  useEffect(() => {

      // Run code on client-side only : ensure document is here
      if (typeof document !== undefined) {
        require('bootstrap/dist/js/bootstrap')
      }
  }, [])

  let width = useDeviceSize();
  width = width[0]
  console.log(width)
  const imageUrl = width >= 650 ? desktopImage : mobileImage;

  return (
    <div>
      <Head>
        <title>HeT</title>
        <meta name="description" content="Casamento HeT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
        <body>

       <div style={{
          backgroundImage: `url(${imageUrl.src})`,
          width: null, height: null,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
          // backgroundColor: 'rgba(161, 196, 250, 0.8)'
        }}>
        {/* <div className="bg" style={{"--img": `url(${imageUrl.src})`}}> */}
        <br/>
        <Banner/>
        <Main/>
        <br/>
        <Local />
        <Countdown/>
        <Rsvp/>
        <br/>
        </div>
      <Footer/>
    </body>
  </div>
  )
}

const useDeviceSize = () => {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [width, height]

}

// function getWindowDimensions() {
//   if (typeof window !== "undefined") {
//     // browser code
//     const width = window.innerWidth;
//   }
//   return width
// }

// const useWindowWidth = () => {
//   const [windowWidth, setWindowWidth] = useState(getWindowDimensions());

//   useEffect(() => {
//       const handleWindowResize = () => {
//           setWindowWidth(getWindowDimensions());
//       };

//       window.addEventListener('resize', handleWindowResize);
//       return () => window.removeEventListener('resize', handleWindowResize);
//   },[]);

//   console.log(windowWidth)
//   return windowWidth;
// };
