// App
import React from "react";

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = (props: any) => {
  const { children } = props;
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
