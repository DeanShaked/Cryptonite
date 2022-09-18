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

// @dev notes:
// - type ComponentWithPageLayout ==> Generic layout warpper for any route and sub-route
// - If the current rendred component has a PageLayout property,
//   we will create a page layout for to wrap every component down his subtree
