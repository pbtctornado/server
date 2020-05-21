import { eventWatcher } from './instances';
import { redisClient } from './redis';
import { SERVER_PORT, WATCHER_INTERVAL } from '../config';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

// create express app
const app = express();

// run this code periodically to check for new Minted() events to see if the users received pBTC on their ETH addresses
setInterval(async () => {
    // TODO handle the situation when the function body takes longer to execute than the "WATCHER_INTERVAL"
    try {
        await eventWatcher.processNewEvents();
    } catch (e) {
        console.log('Error while fetching new events');
        console.log(e)
    }
}, WATCHER_INTERVAL);

// allow CORS policy so that you can pass data from one localhost port to another during development (otherwise you get an error)
app.use(cors());

// use bodyParser for easier request body manipulation
app.use(bodyParser.json());

// POST method route (user send POST request to this route when their BTC address on client side is generated)
app.post('/sendtx', function (request, response) {
    console.log('POST request received...')
    console.log(request.body);      // request JSON (send message data)
    response.send(request.body);    // echo the result back

    // get user's ETH address
    const { userAddress } = request.body;

    // check if user's ETH address is in database already
    redisClient.exists(userAddress, async (err, reply) => {
        if (reply === 0) {
            // add user's data to the database
            redisClient.hmset(userAddress, request.body);

            // if the user doesn't send BTC within this time period, delete his information from the database
            // (it is possible that the user generates new ETH wallet, but he never sends any pBTC to it)
            // redisClient.expire(userAddress, 7 * 24 * 3600); // number of seconds
        } else {
            // TODO echo that address is in database already
        }
    });
});


// TODO setup process.env variables
const port = process.env.PORT || SERVER_PORT; //
app.listen(port, () => console.log(`Server listening on port ${port}...`))