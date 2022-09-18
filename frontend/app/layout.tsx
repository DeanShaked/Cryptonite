// App
import React from 'react';

// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

RootLayout.propTypes = {};

export default RootLayout;
