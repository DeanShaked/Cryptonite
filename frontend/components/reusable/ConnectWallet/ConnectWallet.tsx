// App
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Web 3.0
import { shortenAddress, useEthers, useLookupAddress } from '@usedapp/core';
import { updateAccount } from '../../../store/slices/userSlice';

export interface IConnectWallet {}

const ConnectWallet: React.FC<IConnectWallet> = () => {
  const { ens } = useLookupAddress('');
  const { account, activateBrowserWallet, deactivate } = useEthers();
  const dispatch = useDispatch();

  const [accountAddress, setAccountAddress] = useState('');

  useEffect(() => {
    if (ens) {
      setAccountAddress(ens);
      dispatch(updateAccount(ens));
    } else if (account) {
      setAccountAddress(shortenAddress(account));
      dispatch(updateAccount(account));
    } else {
      setAccountAddress('');
    }
  }, [ens, account, setAccountAddress]);

  return (
    <div>
      <button
        className="bg-site-pink h-[50px] w-[150px] border-none outline-none font-poppins font-bold text-black-site rounded-2xl hover:bg-pink-500 transition-all"
        onClick={() => {
          if (!account) {
            activateBrowserWallet();
          } else {
            deactivate();
          }
        }}
      >
        <p className="p-2">{accountAddress || 'Connect Wallet'}</p>
      </button>
    </div>
  );
};

export default ConnectWallet;

// @dev notes:
// React.FC<IConnectWallet> ==> react.functional_component<props_interface>
// IConnectWallet ==> All available props
