// alter.js
const chalk = require('chalk');

function sum(x, y) {
  const result = x + y;
  console.log(chalk.green(`Die Summe von Zahlen ${x} und ${y} ist ${result}.`));
  return result;
}

module.exports = sum;
