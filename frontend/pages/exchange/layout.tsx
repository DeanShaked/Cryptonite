export interface IExchangeLayout
  extends React.ComponentPropsWithoutRef<'div'> {}

const ExchangeLayout: React.FC<IExchangeLayout> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <main>{children}</main>
    </div>
  );
};

export default ExchangeLayout;
