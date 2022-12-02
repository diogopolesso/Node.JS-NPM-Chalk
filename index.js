import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

// function pegaArquivo(caminhoDoArquivo){
//     const enconding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, enconding, (erro, texto) => {
//         if (erro){
//             trataErro(erro);
//         }
//         console.log(chalk.blue(texto));
//     })
// }

//Metodos Assíncronos 
// promises com .then():

// function pegaArquivo(caminhoDoArquivo){
//     const enconding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, enconding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErro)
// }

// promises com async/await:

async function pegaArquivo(caminhoDoArquivo){
    try {
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
        console.log(chalk.blue(texto));
    }   catch(erro){
        trataErro(erro)
    }
}



pegaArquivo('./arquivos/texto.md');
pegaArquivo('./arquivos/');

// \[[^[\]]*?\]