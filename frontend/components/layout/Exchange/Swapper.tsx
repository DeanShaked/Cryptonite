export interface IExchangeLoader {}

const ExchangeLoader: React.FC<IExchangeLoader> = () => {
  return <div></div>;
};

export default ExchangeLoader;

// @dev notes:
// React.FC<IExchangeLoader> ==> react.functional_component<props_interface>
// IExchangeLoader ==> All available props
