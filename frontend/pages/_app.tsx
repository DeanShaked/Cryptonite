// App
import type { AppProps } from 'next/app';

// Components
import Header from '../components/layout/Header/Header';

// Styles
import '../styles/globals.css';

type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <div>
      <Header />
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}

export default MyApp;
