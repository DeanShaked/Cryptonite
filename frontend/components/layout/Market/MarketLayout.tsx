import styles from './styles';

export interface IMarketLayout extends React.ComponentPropsWithoutRef<'div'> {}

const MarketLayout: React.FC<IMarketLayout> = ({ children }) => {
  return (
    <div className={styles.marketLayoutContainer}>
      <main>{children}</main>
    </div>
  );
};

export default MarketLayout;
