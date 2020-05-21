import { pTokenContract, sender } from './instances';
import { redisClient } from './redis';
import { BASE_BLOCK_NUMBER, REDIS_CONFIG } from '../config'

// create queue of deposit transactions
const Queue = require('bull');
const depositsQueue = new Queue('deposits', {
    redis: {
        host: REDIS_CONFIG.host,
        port: REDIS_CONFIG.port
    },
    defaultJobOptions: { removeOnComplete: true }
});

// run this code if there is a job in depositsQueue to process
depositsQueue.process(async (job, done) => {
    console.log(`\nJob for ${job.data.userAddress} in progress...`)
    try {
        // TODO handle potential errors in the following steps properly
        const { userAddress, rawApproveTx, depositTx } = job.data;

        // 1. send ETH to user, 2. sen approveTX, 3. send depositTX
        const etherResponse = await sender.sendEtherToAddress(userAddress);
        const approveResponse = await sender.sendRawTransaction(rawApproveTx);
        // const depositResponse = await sender.sendDeposit()
    } catch (e) {
        // TODO handle failed jobs (Try again later, check the error message to see which part dailed.)
        console.log('Error while sending transactions')
        console.log(e)
    }
    done();
});


interface MintedEventWatcher {
    web3: any,
    lastCheckedBlockNumber: number,
}

class MintedEventWatcher {
    constructor(web3) {
        this.web3 = web3;

        // TODO load last checked block number from database
        this.lastCheckedBlockNumber = BASE_BLOCK_NUMBER;
    }

    addJobs = async (events: any) => {
        // go through every address in events and check if it is stored in redis database
        for (const [address, value] of Object.entries(events)) {
            redisClient.exists(address, async (err, reply) => {
                if (reply === 1) {
                    console.log(`\nAdding ${address} to job queue...`);

                    // Get deposit data that belong to his address
                    redisClient.hgetall(address, async (err, userData) => {
                        await depositsQueue.add(userData, { removeOnComplete: true });

                        // check if the user has enough pBTC (uncomment when sending depositTx is implemented)
                        // if (value >= object.btcAmount) {
                        //     await depositsQueue.add(object);
                        // }

                        // delete user from  after it's appended to depositQueue
                        redisClient.del(address);
                    });
                } else {
                    // console.log(`${address} not in database`);
                }
            });
        }
    }

    /**
     * This function is called periodically to check for new Minted() events of pToken contract.
     * It checks is some of the addresses stored in Redis database received pBTC
     */
    processNewEvents = async () => {
        const newEvents = this.getProcessedEvents(await this.fetchNewEvents());
        console.log('New events:')
        console.log(newEvents)

        // go through new events and add new jobs to deposit queue
        await this.addJobs(newEvents)
    }

    /**
     * returns events from @lastCheckedBlockNumber to 'latest' in raw format
     */
    fetchNewEvents = async () => {
        const lastCheckedBlockNumber = this.lastCheckedBlockNumber;
        // const latestBlockNumber = await this.web3.eth.getBlockNumber();
        const latestBlockNumber = lastCheckedBlockNumber + 15000;

        console.log(`\nGetting Minted events from block ${lastCheckedBlockNumber} to block ${latestBlockNumber}...`)

        // TODO is there more efficient way ho to get events? (using TheGraph)
        const events = await pTokenContract.getPastEvents('Minted',
            {
                fromBlock: lastCheckedBlockNumber,
                toBlock: latestBlockNumber // You can also specify 'latest'
            })

        // set the new last checked block number
        this.lastCheckedBlockNumber = latestBlockNumber;
        // TODO save lastCheckedBlockNumber to database

        return events
    }

    /**
     * Processes raw events and returns them in { address : amountMinted } format
     * @param events: Raw events from web3.js library
     */
    getProcessedEvents = (events) => {
        let processedEvents = {};

        // extract address and deposited amount from events newEventsProcessed = { address : amount }
        events.forEach(event => {
            const recipient: string = event.returnValues[1];
            const amount: number = event.returnValues[2];
            processedEvents[recipient] = amount
        });

        return processedEvents
    }
}

export { MintedEventWatcher }