/*const myobject = {
    name: "Lisa",
    age: 21,
    garage: {
        car01: "Mustang",
        car02: "Lambor",
        car03: "Uno",
        car04: "Kombi",
    }
}

console.log (`${myobject.name} com seus ${myobject.age} anos, possuí um ${myobject.garage.car01}`)*/

let loja = {
    nome: "Autocar",
    date: 1976,
    modelos: [
        {name01: "Ford", modelo01: ["Fiesta", "Focus", "Mustang"]},
        {name02: "BMW", modelo02: ["320", "x3", "x5"]},
        {name03: "Fiat", modelo03: ["500", "panda"]},
    ]
} 

console.log(`Em ${loja.date} a empresa ${loja.nome} disponibilizou vários modelos de carros, dentre eles, a linha ${loja.modelos.name01}, ${loja.modelos.name02} e ${loja.modelos.name03}`)

