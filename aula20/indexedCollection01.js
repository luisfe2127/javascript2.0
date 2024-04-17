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
//ou
const a1 = ["a", "b", "c"];
const a3 = a1.map((item) => item.toUpperCase());
console.log(a3);

const numbers = [1, 4, 9, 16, 25];
const squareRoots = numbers.map(num => Math.sqrt(num));
 
console.log(squareRoots);

//filter: Este método retorna um novo array contendo os itens para os quais a função retornou verdadeiro. 

let myArr1 = ['a', 10, 'b', 20, 'c', 30];
 
let a2 = myArr1.filter(function (item) {
    return typeof item === 'number';
});
 
console.log(a2);

//slice: método extrai uma seção de um array e retorna um novo array.

let myArray04 = ["a", "b", "c", "d", "e"];
myArray04 = myArray04.slice(1, 4); 
console.log(myArray04)
//ou 
const myArray06 = ["1", "2", "3", "4", "5"];
myArray06.splice(1, 3, "a", "b", "c", "d");
console.log(myArray06)

//at: método retorna o elemento no índice especificado na matriz ou undefinedse o índice estiver fora do intervalo. É usado principalmente para índices negativos que acessam elementos do final do array.

let myArray05 = ["a", "b", "c", "d", "e"];
myArray05.at(-2)
console.log(myArray05)

//O flat()método retorna uma nova matriz com todos os elementos da submatriz concatenados recursivamente até a profundidade especificada.

let myArray07 = [1, 2, [3, 4]];
myArray07 = myArray07.flat();
console.log(myArray07)

//O flatMap()método é executado map()seguido por um flat()de profundidade 1.

const a4 = ["a", "b", "c"];
const a5 = a4.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a5);

//O find()método retorna o primeiro item para o qual callbackfoi retornado true.

const a7 = ["a", 10, "b", 20, "c", 30];
const i = a7.find((item) => typeof item === "number");
console.log(i);

//O every()método retorna trueif callbackretorna truepara cada item do array.

function isNumber(value) {
  return typeof value === "number";
}
const a8 = [1, 2, 3];
console.log(a8.every(isNumber)); // true
const a9 = [1, "2", 3];
console.log(a9.every(isNumber)); // false

//O some()método retorna truese callbackretornar truepelo menos um item da matriz.

function isNumber(value) {
  return typeof value === "number";
}
const a10 = [1, 2, 3];
console.log(a10.some(isNumber)); // true
const a11 = [1, "2", 3];
console.log(a11.some(isNumber)); // true
const a12 = ["1", "2", "3"];
console.log(a12.some(isNumber)); // false