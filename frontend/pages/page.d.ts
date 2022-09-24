// App
import { AppProps, NexctPage } from 'next/app';
import { ComponentType, ReactElement, ReactNode } from 'react';


/**
 * NextPageWithLayout is a component type used in page components that helps  to interact with layout components.
 * It takes a generic type props, add a getLayout property, specify the layout.
 */

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

export interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}