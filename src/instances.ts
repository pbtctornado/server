import { web3 } from './getWeb3';
import { Sender } from './sender';
import { MintedEventWatcher } from './eventWatcher';
import { pTokenABI } from '../contracts/pTokenABI';
import { PTOKEN_ADDRESS, PRIVATE_KEY_ADMIN } from '../config';

// get pToken instance
const pTokenContract = new web3.eth.Contract(
    pTokenABI,
    PTOKEN_ADDRESS.ropsten
);

const eventWatcher = new MintedEventWatcher(web3);

const sender = new Sender(web3, PRIVATE_KEY_ADMIN)

export { web3, sender, pTokenContract, eventWatcher }


