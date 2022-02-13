import React from 'react';
import { Helmet } from 'react-helmet';

import { domainName, seoDescription, seoTitle } from '../../cms/data.json';
import Footer from './Footer';
import Navbar from './Navbar';

import '../styles/index.scss';

export default ({ children }) => {
  return (
    <>

      <Helmet>
        {/* <html lang="en" className="has-navbar-fixed-top" /> */}
        <html lang="en" />

        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />

        <meta name="author" content="Echo Lacombe Association" />
        <meta name="copyright" content="© Echo Lacombe Association" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <link rel="canonical" href={`https://${domainName}`} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#D3D3D3" />
        <meta name="theme-color" content="#D3D3D3" />
      </Helmet>

      <Navbar />

      {children}

      <Footer />

    </>
  );
};
