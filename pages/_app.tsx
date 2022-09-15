// App
import { AppProps } from "next/app";

// Components
import MainNavbar from "../components/UI/MainNavbar/MainNavbar";

// Styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <MainNavbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
