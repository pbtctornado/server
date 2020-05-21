const PRIVATE_KEY_ADMIN = '4678969019B06A425F33ACFC789D05C338DBAB7E8D9BE9A17A2F2B3759CB9D80';
const RPC_URL = 'https://ropsten.infura.io/v3/066eeeca9925471f9db758dc3af48442';

const PTOKEN_ADDRESS = {
    ropsten: '0xEB770B1883Dcce11781649E8c4F1ac5F4B40C978',
    mainnet: '0x5228a22e72ccC52d415EcFd199F99D0665E7733b',
};

// 7575311 is this first block with some pToken transaction
const BASE_BLOCK_NUMBER = 7575311;

// How often to check new Minted events ( seconds * 1000 )
const WATCHER_INTERVAL = 20 * 1000;

const REDIS_CONFIG = {
    host: '127.0.0.1',
    port: 6379
}

const SERVER_PORT = 5000;

export {
    PRIVATE_KEY_ADMIN,
    RPC_URL,
    PTOKEN_ADDRESS,
    WATCHER_INTERVAL,
    BASE_BLOCK_NUMBER,
    REDIS_CONFIG,
    SERVER_PORT
}




