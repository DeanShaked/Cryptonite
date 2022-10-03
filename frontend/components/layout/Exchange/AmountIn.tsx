import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { chevronDown } from '../../../assets/index';

const AmountIn = () => {
  const [showList, setShowList] = useState(false);
  const mockPools = [
    {
      token: 'ETH',
      tokenName: 'Ethereum',
    },
    {
      token: 'SPLT',
      tokenName: 'stPlatinum',
    },
    {
      token: 'SGLD',
      tokenName: 'stGold',
    },
  ];

  const [isActive, setIsActive] = useState(false);

  const toggleShowList = () => {
    setShowList((prevState) => !prevState);
  };
  return (
    <div className="flex justify-between items-center flex-row w-full min-w-full bg-site-dim border-[1px] border-transparent hover:border-site-dim2 min-h-[96px] sm:p-8 p-4 rounded-[20px]">
      <input
        className="w-full flex-1 bg-transparent outline-none font-poppins font-black text-2xl text-white"
        type="number"
        placeholder="0.0"
        value={''}
        disabled={false}
      />
      <div className="relative" onClick={() => toggleShowList()}>
        <button className="flex flex-row items-center bg-site-dim2 py-2 px-4 rounded-xl font-poppins font-bold text-white">
          ETH
          <Image
            src={chevronDown}
            alt="chevron-down"
            className={`w-4 h-4 object-contain ml-2 ${
              showList ? 'rotate-180' : 'rotate-0 '
            }`}
          ></Image>
        </button>
        {showList && (
          <ul className="absolute z-10 right-0 bg-site-black border-[1px] border-site-dim2 w-full mt-2 rounded-lg min-w-[170px] overflow-hidden">
            {mockPools.map(({ token, tokenName }, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    isActive ? 'bg-site-dim2' : ''
                  } font-poppins font-medium text-base text-white hover:text-dim-white px-5 py-3 hover:bg-site-dim2 cursor-pointer`}
                >
                  {token}{' '}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AmountIn;
