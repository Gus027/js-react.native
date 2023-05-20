// FOR.MAP


const pessoa = [
    {
    nome : 'Joao',
    idade : 23,
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
    nome : 'Amanda',
    idade : 12,
   }
]; 

for(let i=0;i <= pessoa.length; i++){
  

    console.log(pessoa[i]);
}
 
console.log('-'*44);

pessoa.forEach((obj) => {
    console.log(obj);
})