//Aceita apenas objetos 

let obj1 = {
    nome: "Pedrin",
    idade: 17,
}

let obj2 = {
    nome: "Junin",
    idade: 16,
}

let ws = new WeakSet([obj1, obj2])

console.log(ws)

