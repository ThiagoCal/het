import '../styles/globals.css'
import '../styles/application.scss'
import React from 'react';
import ReactDOM from 'react-dom';
// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
