// Redux
import { store } from '../store/store';
import { Provider } from 'react-redux';

// Components
import Header from '../components/reusable/Header/Header';
import Footer from '../components/reusable/Footer/Footer';

// Types & Interfaces
import { AppPropsWithLayout, NextPageWithLayout } from './page';

// Styles
import styles from '../styles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: NextPageWithLayout) => page);

  return (
    <Provider store={store}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <Header />
        </div>
      </div>
      <main className="main-wrapper">
        {getLayout(<Component {...pageProps} />)}
      </main>
      <Footer />
    </Provider>
  );
}

export default MyApp;
