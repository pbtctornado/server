const Web3 = require('web3')
const { RPC_URL, PRIVATE_KEY_ADMIN } = require('../config')

function setupWeb3() {
    try {
        const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL));
        const account = web3.eth.accounts.privateKeyToAccount('0x' + PRIVATE_KEY_ADMIN)
        web3.eth.accounts.wallet.add('0x' + PRIVATE_KEY_ADMIN)
        web3.eth.defaultAccount = account.address
        return web3
    } catch (e) {
        console.error('web3 failed')
    }
}

const web3 = setupWeb3()
export { web3 }