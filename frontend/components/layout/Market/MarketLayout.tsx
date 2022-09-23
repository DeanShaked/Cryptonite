export interface IMarketLayout extends React.ComponentPropsWithoutRef<'div'> {}

const MarketLayout: React.FC<IMarketLayout> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <main>{children}</main>
    </div>
  );
};

export default MarketLayout;
