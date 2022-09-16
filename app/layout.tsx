// App
import React from "react";
import { AppProps } from "next/app";
import PropTypes from "prop-types";

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = (props: any) => {
  console.log("children :>> ", props);
  const { children } = props;
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

RootLayout.propTypes = {};

export default RootLayout;
