const moment = require('moment');

const day = 7;

const between = moment().subtract(day, 'days').seconds(0).minutes(0).hours(0).toDate();
const and = moment().subtract(1, 'days').seconds(59).minutes(59).hours(23).toDate();

console.log(moment(between).local().format('YYYY-MM-DD HH:mm:ss'), moment(and).local().format('YYYY-MM-DD HH:mm:ss'));






