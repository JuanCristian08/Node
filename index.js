import promptSync from 'prompt-sync';
import chalk from 'chalk';

const prompt = promptSync();
let nome = prompt('Digite seu nome: ');

console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
console.log(chalk.bgRgb(250, 67, 23)('Este é um exemplo de mensagem colorida usando chalk!'));
