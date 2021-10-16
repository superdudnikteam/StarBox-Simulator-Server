const chalk = require('chalk');

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function logger (type, text) {
  if(type === "error") return console.log(chalk.red('[ERROR]:') + ' ' + chalk.redBright(text));
  if(type === "info") return console.log(chalk.blue('[INFO]:') + ' ' + chalk.blueBright(text));
}

var range = n => Array(n + 1).join(1).split('').map((x, i) => i);

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "-" + month + "-" + day + "-" + hour + "-" + min + "-" + sec;

}

module.exports = {randomInteger, logger, range, getDateTime};