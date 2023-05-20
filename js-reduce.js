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

const peopleKey = {
    Gustavo:{
        idade:23
    },
    Maria:{
        idade:44
    },
    Eduardo:{
        idade:32
    },
    Vinicius:{
        idade:34
    }
}

console.log(peopleKey.Gustavo.idade);


const people = pessoa.reduce((acc,obj)=>{ 
    return{
        ...acc,
        [obj.nome]:{
            idade: obj.idade
        }
    }
})



const fuctionPeopleReduce = (acc,obj) =>{
    return{
        ...acc,
        [obj.nome]: {
            idade: obj.idade
        }
    }

}

console.log(pessoa.reduce(fuctionPeopleReduce))