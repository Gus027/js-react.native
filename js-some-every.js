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
    idade : 51,
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
//Some se um existir conforme a função passado , acima de 50 anos
const somePeople = pessoa.some((obj) => obj.idade > 50)
//Every se todos tirevem acima de 50 anos
const everyPeople = pessoa.every((obj)=>obj.idade>50)

const fuctionSomeAndEvery = (objeto) => objeto.idade > 50
 


//                 Here
console.log(pessoa.some(fuctionSomeAndEvery));

