// App
import { AppProps, NexctPage } from 'next/app';
import { ComponentType, ReactElement, ReactNode } from 'react';

/**
 * ComponentWithPageLayout is a component type that helps to interact with layout components.
 * If the current rendred component has a PageLayout property,
 * we will render this component as children inside his layout component
 * for example:
 * if([page_component].PageLayout) then
 *  wrap [layout_component] around [page_component]
 */
export type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType;
  };
};

/**
 * NextPageWithLayout is a component type used in page components that helps  to interact with layout components.
 * It takes a generic type props, add a getLayout property, specify the layout.
 */

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
