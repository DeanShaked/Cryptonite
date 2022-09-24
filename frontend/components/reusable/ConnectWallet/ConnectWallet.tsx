// Web 3.0
import { useEthers } from '@usedapp/core';

export interface IConnectWallet {}

const ConnectWallet: React.FC<IConnectWallet> = () => {
  const { activateBrowserWallet, account } = useEthers();

  return (
    <div>
      <button
        className="bg-site-pink h-[60px] border-none outline-none font-poppins font-bold text-black-site rounded-2xl hover:bg-pink-500 transition-all"
        onClick={() => activateBrowserWallet()}
      >
        <p>{account ? account : 'Connect Wallet'}</p>
      </button>
    </div>
  );
};

export default ConnectWallet;

// @dev notes:
// React.FC<IConnectWallet> ==> react.functional_component<props_interface>
// IConnectWallet ==> All available props
