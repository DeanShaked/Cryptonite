// App
import type { AppProps } from 'next/app';

// Redux
import { store } from '../store/store';
import { Provider } from 'react-redux';

// Components
import Header from '../components/reusable/Header/Header';
import Footer from '../components/reusable/Footer/Footer';

// Styles
import '../styles/globals.css';

// Types
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: NextPageWithLayout) => page);

  return (
    // <Provider store={store}>
    <>
      <Header />
      <main className="main-wrapper">
        {getLayout(<Component {...pageProps} />)}
      </main>
      <Footer />
    </>
    // </Provider>
  );
}

export default MyApp;
