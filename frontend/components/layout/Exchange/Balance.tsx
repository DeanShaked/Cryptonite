import React from 'react';
import { parseUnits, formatUnits } from 'ethers/lib/utils';

const Balance = () => {
  const tokenBalance = parseUnits('0.005');

  return (
    <div className="w-full text-left mt-2 ml-2">
      <p className="font-poppins font-normal text-dim-white">
        {tokenBalance && (
          <>
            <span className="font-semibold text-white">Balance:</span>
            {formatUnits(tokenBalance || parseUnits('0 '))}
          </>
        )}
      </p>
    </div>
  );
};

export default Balance;
