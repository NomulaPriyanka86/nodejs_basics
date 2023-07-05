const fs = require('fs');
const sh = require('superheroes');
const chalk=require('chalk');
fs.writeFileSync('file.txt', 'Hi there..');
fs.appendFileSync('file.txt', 'appendind to the text');

//==========================
console.log(sh.random());                     //Morlun

let count = 0;
let hero = "";
do{
    hero = sh.random()
    count++;
}
while(!(hero === 'Batman'));

console.log(hero, count);                     //Batman 14214
//======================================

hero = sh.random()
console.log(chalk.blue(hero));                   //Sasquatch
console.log(chalk.red('checking!!!!!!!!'));     //checking!!!!!!!!
