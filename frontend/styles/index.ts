const styles = {
  // AmountIn & AmountOut
  amountContainer:
    'flex justify-between items-center flex-row w-full min-w-full bg-site-dim border-[1px] border-transparent hover:border-site-dim2 min-h-[96px] sm:p-8 p-4 rounded-[20px]',
  amountInput:
    'w-full flex-1 bg-transparent outline-none font-poppins font-black text-2xl text-white',
  currencyButton:
    'flex flex-row items-center bg-site-dim2 py-2 px-4 rounded-xl font-poppins font-bold text-white',
  currencyList:
    'absolute z-10 right-0 bg-site-black border-[1px] border-site-dim2 w-full mt-2 rounded-lg min-w-[170px] overflow-hidden',
  currencyListItem:
    'font-poppins font-medium text-base text-white hover:text-dim-white px-5 py-3 hover:bg-site-dim2 cursor-pointer',

  // Exchange
  actionButton:
    'border-none outline-none px-6 py-2 font-poppins font-bold text-lg rounded-2xl leading-[24px] transition-all min-h-[56px]',
  message: 'font-poppins font-lg text-white font-bold mt-7',

  // WalletButton
  walletButton:
    'bg-site-pink border-none outline-none px-6 py-2 font-poppins font-bold text-lg text-white rounded-3xl leading-[24px] hover:bg-pink-600 transition-all',

  // loader
  loader: 'flex justify-center items-center flex-col w-full min-h-full',
  loaderImg: 'w-56 h-56 object-contain',
  loaderText:
    'font-poppins font-normal text-dim-white text-lg text-center mt-10',

  // balance
  balance: 'w-full text-left mt-2 ml-2',
  balanceText: 'font-poppins font-normal text-dim-white',
  balanceBold: 'font-semibold text-white',
};

export default styles;
