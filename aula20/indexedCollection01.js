let students = []

students [4] = "Ana"
students [1] = "Pedro"
students [2] = "Maria"
students [3] = "Jao"
students [0] = "Luvas"

console.log(students)

// Método 1: acessando os elementos do array

let fruits01 = ['Apple', 'Mango', 'Banana'];
console.log(fruits01 [0]);
console.log(fruits01[1]);

//Método 2: Obtenção do comprimento do array

let fruits02 = ['Apple', 'Mango', 'Banana'];
console.log(fruits02.length)

//Método 3: iterando sobre arrays

const fruits03 = ['Apple', 'Mango', 'Banana'];
for (let i = 0; i < fruits03.length; i++) {
    console.log(fruits03[i]);
}

const fruits04 = ['Apple', 'Mango', 'Banana'];
fruits04.forEach(function (fruit04) {
    console.log(fruit04);
});

//Loop forEach

produtos = [
    {
        nome: "Geladeira",
        valor: 3000.00,
        desconto: 0.15,
    },
    {
        nome: "Microondas",
        valor: 670.00,
        desconto: 0.5,
    },
    {
        nome: "Fogao",
        valor: 980.00,
        desconto: 0.8,
    }
];

produtos.forEach((produtoAtual) => {
    let valorDesconto = produtoAtual.valor * produtoAtual.desconto
    let valorTotal = produtoAtual.valor - valorDesconto 
    produtoAtual.valorTotalProduto = valorTotal
    console.log(produtoAtual)
})

const items = [12, 24, 36];
const copy = [];
items.forEach((item) => {
    copy.push(item + item + 2);
});
console.log(copy);

//Método 4: métodos de array

//concat: Une dois arrays em um

let myArray01 = new Array('1', '2', '3');
myArray01 = myArray01.concat('a', 'b', 'c');
console.log(myArray01);
 

//join: Este método cria uma string juntando todos os elementos de um array. 

let students02 = new Array('john', 'jane', 'joe');
let list = students02.join(' - ');
console.log(list);

//sort: Deixa os valores de um array em ordem crescente. 

let myArray = new Array('cunin', 'ablin', 'dobin');
myArray.sort();
console.log(myArray)

//map: Este método retorna um novo array do valor retornado da execução de uma função em cada item do array. 

let arr = [2, 5, 6, 3, 8, 9];
 
let newArr = arr.map(function (val, index) {
    return { key: index, value: val * val };
})
 
console.log(newArr)

const numbers = [1, 4, 9, 16, 25];
const squareRoots = numbers.map(num => Math.sqrt(num));
 
console.log(squareRoots);

//filter: Este método retorna um novo array contendo os itens para os quais a função retornou verdadeiro. 

let myArr1 = ['a', 10, 'b', 20, 'c', 30];
 
let a2 = myArr1.filter(function (item) {
    return typeof item === 'number';
});
 
console.log(a2);