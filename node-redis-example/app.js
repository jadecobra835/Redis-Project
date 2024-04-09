const redis = require('redis');
const client = redis.createClient('127.0.0.1', '6379');

function alphaNumericString() {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "http://localhost:3000/";
    for (var i = 0, n = charset.length; i < 20; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};

async function shortenURL(url) {
    await client.connect()
    console.log('Connected!')
    console.log(await client.set(alphaNumericString(), url))
    console.log(await client.KEYS('*http://localhost:3000/*'))
}

shortenURL('https://mytech.devcamp.com');
