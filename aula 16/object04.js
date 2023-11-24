const myobject = {
    name: "Lisa",
    age: 21,
    garage: {
        car01: "Mustang",
        car02: "Lambor",
        car03: "Uno",
        car04: "Kombi",
    }
}

console.log (`${myobject.name} com seus ${myobject.age} anos, possuí um ${myobject.garage.car01}.`)

const loja = {
    nome: "Autocar",
    date: 1976,
    carros: [
        {name01: "Ford", modelo01: ["Fiesta", "Focus", "Mustang"]},
        {name02: "BMW", modelo02: ["320", "x3", "x5"]},
        {name03: "Fiat", modelo03: ["500", "panda"]},
    ]  
} 

console.log(`Desde ${loja.date} a empresa ${loja.nome} disponibilizou vários modelos de carros, dentre eles, a linha ${loja.carros[0].name01}, ${loja.carros[1].name02} e ${loja.carros[2].name03}. A linha ${loja.carros[0].name01} disponibiliza os modelos ${loja.carros[0].modelo01[0]}, ${loja.carros[0].modelo01[1]} e ${loja.carros[0].modelo01[2]}. ${loja.carros[1].name02}: ${loja.carros[1].modelo02[0]}, ${loja.carros[1].modelo02[1]} e ${loja.carros[1].modelo02[2]}. E a marca ${loja.carros[2].name03}, ${loja.carros[2].modelo03[0]} e ${loja.carros[2].modelo03[1]}.`)

