// Usando o conceito blocking e NoBlocking no mesmo file.


const fs = require('fs');

const dados = fs.readFile('arquivo.txt', (err, data)=>{
    if (err) throw err;
    console.log(`Leitura dos dados ${data}`);
    fs.unlink('arquivo.txt', (unlinkerr)=>{
        if (unlinkerr) throw unlinkerr;
        console.log('Arquivo excluído com sucesso!');
    });
});

/** Conflito */
// fs.unlinkSync('arquivo.txt');
// console.log('Arquivo excluído com sucesso!');