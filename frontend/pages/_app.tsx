// App
import { AppProps } from 'next/app';

// Components
import Header from '../components/layout/Header/Header';

// Styles
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
