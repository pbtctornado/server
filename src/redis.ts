import { REDIS_CONFIG } from '../config';

const redis = require('redis');
const redisClient = redis.createClient({
    host: REDIS_CONFIG.host,
    port: REDIS_CONFIG.port
});

redisClient.on('connect', function () {
    console.log('Redis connected');
});

export { redisClient }
