import { Coin } from './coins';
import {
  USDCxAddress, 
  WETHxAddress,
  DAIxAddress,
  MKRxAddress,
  WBTCxAddress,
} from './polygon_config';

export const downgradeTokensList = [
  {
    coin: Coin.USDCx,
    tokenAddress: USDCxAddress,
  },
  {
    coin: Coin.DAIx,
    tokenAddress: DAIxAddress,
  },
  {
    coin: Coin.MKRx,
    tokenAddress: MKRxAddress,
  },
  {
    coin: Coin.WETHx,
    tokenAddress: WETHxAddress,
  },
  {
    coin: Coin.WBTCx,
    tokenAddress: WBTCxAddress,
  },
];