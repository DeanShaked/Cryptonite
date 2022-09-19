// App
import type { AppProps } from 'next/app';
import Footer from '../components/layout/Footer/Footer';

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
    <>
      <Header />
      <main className="main-wrapper">
        {Component.PageLayout ? (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </main>
      <Footer />
    </>
  );
}

export default MyApp;

// @dev notes:
// - type ComponentWithPageLayout ==> Generic layout warpper for any route and sub-route
// - If the current rendred component has a PageLayout property,
//   we will render this component as children inside his layout component
//   for example: [page_component_name].PageLayout = [layout_component_name]
