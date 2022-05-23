import '../styles/globals.css'
import '../styles/application.scss'
import React from 'react';
import ReactDOM from 'react-dom';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
