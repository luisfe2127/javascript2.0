//Number
//BigInt
//Math
//Date

let x = 46
let y = 12
let z = 24

x = Math.max(x,y,x)

console.log(x)



let today = new Date()

console.log(today)

const data = new Date()

let dia = String(data.getDate()).padStart(2, "0")

let mes = String(data.getMonth() + 1).padStart(2, "0")

let ano = data.getFullYear()

console.log(`${dia}/${mes}/${ano}`)