// Web 3.0
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

// Styles
import styles from '../../../styles/index';

export interface IConnectWallet {}

const ConnectWallet: React.FC<IConnectWallet> = () => {
  const providerOptions = {};
  const connectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(
        web3ModalInstance
      );
      console.log('web3ModalProvider', web3ModalProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button className={styles.walletButton} onClick={connectWallet}>
        Connect Wallet
      </button>
    </div>
  );
};

export default ConnectWallet;

// @dev notes:
// React.FC<IConnectWallet> ==> react.functional_component<props_interface>
// IConnectWallet ==> All available props
