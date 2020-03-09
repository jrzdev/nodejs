// Conceito de Efetio Blocking

const fs = require('fs');

console.log(process.hrtime()[0]/60);
const dados = fs.readFileSync('arquivo.txt');

console.log('Running after the file...');
console.log(process.hrtime()[0]/60);