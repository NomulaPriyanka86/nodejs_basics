const moment = require('moment');
const time = new Date();
console.log(time);
/*2023-06-18T10:56:27.978Z */

const parsedTime = moment(time).format("h:mm:ss");
console.log(parsedTime);        /*4:37:04 */

const parsedDate = moment(time).format('DD-MM-YYYY');
console.log(parsedDate);     /*19-06-2023 */

