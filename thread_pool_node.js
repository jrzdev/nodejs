// Vamos trabalhar com o recurso 'Thread pool' do node.
/**
 * O Node é singlethread, isso significa que temos somente uma 
 * sequência de instrução para o processador, ou seja, utiliza-se
 * somente um espaço de memória. Porém, quando a tarefa é muito 'parruda',
 * o Node usa a 'Thread Pool' para execução simultaneamente até 4 núcleos.
 * 
 */

// Vamos aos exemplos.

// Addons: uso do openssl(Criptografia)
const crypto = require('crypto');
// Pegar o tempo exato do início do script.
const inicio = Date.now();

function GetHashTime(){
    /**
     * Função que pega o time utilizado para execução do hash
     */
    crypto.pbkdf2('fuck you', 'b', 10000, 256, 'sha256', ()=>{
        console.log(`Time: ${Date.now() - inicio}`); 
    });
}

GetHashTime();
GetHashTime();
GetHashTime();
GetHashTime();
GetHashTime(); // Execução ñ exec paralelamente, pois ultrapassou os 4 cores.
