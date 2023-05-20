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

const filtrage = (obj) => obj.idade > 30;

const filtragem = pessoa.filter(filtrage)

const filtragem2 = pessoa.filter((obj) => obj.idade > 30)

console.log(filtragem2);