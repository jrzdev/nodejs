// Conceito de NoBlocking

const fs = require('fs');


console.log('running...');
console.log(process.hrtime()[0]/60);

// O NoBlocking precisa-se passar uma função de callback 
const dados = fs.readFile('arquivo.txt', (err, data)=>{
    if (err) throw err;
    console.log('It\'s over');
});

console.log('running...');
console.log(process.hrtime()[0]/60);