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

