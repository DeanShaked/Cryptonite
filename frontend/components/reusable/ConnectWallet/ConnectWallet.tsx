// App
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Web 3.0
import { useEthers } from '@usedapp/core';
import { updateAccount } from '../../../store/slices/userSlice';

export interface IConnectWallet {}

const ConnectWallet: React.FC<IConnectWallet> = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();

  const dispatch = useDispatch();

  useEffect(() => {
    if (account) {
      dispatch(updateAccount(account));
    }
  }, [account]);

  return (
    <div>
      <button
        className="bg-site-pink h-[60px] border-none outline-none font-poppins font-bold text-black-site rounded-2xl hover:bg-pink-500 transition-all"
        onClick={() => activateBrowserWallet()}
      >
        <p>{account ? account : 'Connect Wallet'}</p>
      </button>
      <button onClick={() => deactivate()}>Logout</button>
    </div>
  );
};

export default ConnectWallet;

// @dev notes:
// React.FC<IConnectWallet> ==> react.functional_component<props_interface>
// IConnectWallet ==> All available props
