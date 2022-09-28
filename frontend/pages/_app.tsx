// App
import { DAppProvider } from '@usedapp/core';
import { DAPP_CONFIG } from '../lib/config';

// Redux
import { store } from '../store/store';
import { Provider } from 'react-redux';
// Components
import Header from '../components/reusable/Header/Header';
import Footer from '../components/reusable/Footer/Footer';

// Types & Interfaces
import { AppPropsWithLayout, NextPageWithLayout } from './page';

// Styles
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: NextPageWithLayout) => page);

  return (
    <DAppProvider config={DAPP_CONFIG}>
      <Provider store={store}>
        <div className="flex flex-col bg-site-black">
          <Header />

          <main className="flex flex-col h-screen">
            {getLayout(<Component {...pageProps} />)}
          </main>
          <Footer />
        </div>
      </Provider>
    </DAppProvider>
  );
}

export default MyApp;
