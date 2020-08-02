const chalk = require('chalk');

function print() {
  console.log(chalk.blue('Open Source JavaScript Library Demo'));
}

function add(value1, value2) {
  return value1 + value2;
}

module.exports = {
  print,
  add,
};
