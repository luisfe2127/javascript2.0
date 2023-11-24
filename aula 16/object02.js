let frutas = "melao, uva, maça";
frutas = frutas.split(', ')

console.log(frutas[1])

let scholl = {
    name: "Ann",
    age: 16,
    serie: 9,
    matricula: "USP",

    bi01: 8,
    bi02: 5,
    bi03: 7,
    bi04: 6,
}

console.log(`${scholl.matricula.split(' ')[0]}`)

console.log(`${scholl.name}, ${scholl.age} anos, foi matriculado na ${scholl.matricula} com a média de ${(scholl.bi01 + scholl.bi02 + scholl.bi03 + scholl.bi04)/4} `)