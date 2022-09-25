import Image from 'next/image';
import { ethereumLogo } from '../../../assets';

export interface IExchangeLoader {
  title: string;
}

const ExchangeLoader: React.FC<IExchangeLoader> = ({ title }) => {
  return (
    <div className="flex justify-center items-center flex-col w-full min-h-full">
      <Image
        src={ethereumLogo}
        alt="ethereum logo"
        height={224}
        width={224}
        objectFit="contain"
      ></Image>
      <p className="font-poppins font-normal text-dim-white text-lg text-center mt-10">
        Please connect your wallet
      </p>
    </div>
  );
};

export default ExchangeLoader;

// @dev notes:
// React.FC<IExchangeLoader> ==> react.functional_component<props_interface>
// IExchangeLoader ==> All available props
