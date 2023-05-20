const pessoa = [
    {
    nome : 'Joao',
    idade : 14,
   },
   {
    nome : 'Alex',
    idade : 43,
   },
   {
    nome : 'Ricardo',
    idade : 55,
   }
   ,
   {
    nome : 'Gustavo',
    idade : 20,
   },
   {
    nome : 'Jhonny',
    idade : 25,
   },
   {
    nome : 'Vinicius',
    idade : 33,
   },
   {
    nome : 'Jordan',
    idade : 43,
   },
   {
    nome : 'Caio',
    idade : 22,
   }
];
// FIND ATRIBUI O PRIMEIRO VALOR NA CONDIÇÃO PARA NOVA VARIAVEL FORMANDO UM OBJETO. ...
//         VAR                               OBJ  
const novaPessoa = pessoa.find((obj) => obj.idade > 30);

const novaPessoa2 = (obj) => obj.idade > 30;

console.log(pessoa.find(novaPessoa2));


const BuscarPessoa = (obj) => obj.nome === 'Gustavo';

console.log(pessoa.find(BuscarPessoa))