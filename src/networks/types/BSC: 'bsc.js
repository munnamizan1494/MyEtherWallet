import tokens from '@/_generated/tokens/tokens-clo.json';
import contracts from '@/_generated/contracts/contract-abi-clo.json';
import clo from '@/assets/images/networks/clo.svg';

export default {
  name: ‘BNB’,
  name_long: ‘Binance samrt chain’,
  homePage: ‘
https://bsc-dataseed.binance.org/

  blockExplorerTX: ‘
https://bscscan.com/tx/[[txHash]]'
,
  blockExplorerAddr: ‘
https://bscscan.com/account/[[address]]'
,
  chainID: 56,
  tokens: tokens,
  contracts: contracts,
  icon: bnb,
  currencyName: ‘BNB’
};

