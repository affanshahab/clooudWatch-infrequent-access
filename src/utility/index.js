// Import the moment.js library
const moment = require('moment');

exports.getTime = () => {
    let currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log("current time", currentTime);
    return currentTime
}