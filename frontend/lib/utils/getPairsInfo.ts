 
  import { abis } from '../../contracts';

/**
 * getPairsInfo
 *
 * @export
 * @param {*} pairAddresses DAI/WETH
 * @param {*} web3
 */
export async function getPairsInfo(pairAddresses, web3) {
  const pairsInfo = [];
  const pairABI = abis.pair;
  const tokenABI = abis.erc20.abi;

  /* Creating pairs for every provided pairAddresses */
  for (let i = 0; i < pairAddresses.length; i++) {
    const pairAddress = pairAddresses[i];
    const pair = new web3.eth.Contract(pairABI, pairAddress);

    /* Fetch pair token addresses */
    const token0Address = await pair.methods.token0().call();
    const token1Address = await pair.methods.token1().call();

    /* Create pair Contract instance */
    const token0Contract = new web3.eth.Contract(tokenABI, token0Address);
    const token1Contract = new web3.eth.Contract(tokenABI, token1Address);

    // Fetch pair token names
    const token0Name = await token0Contract.methods.name().call();
    const token1Name = await token1Contract.methods.name().call();

    pairsInfo.push({
      address: pairAddress,
      token0Address,
      token1Address,
      token0Name,
      token1Name,
    });
  }
  return pairsInfo;
}
