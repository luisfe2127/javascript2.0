let x = {x: 1}

console.log(x.hasOwnProperty("x"))

//hasOwnProperty serve para saber se a propriedade e true ou false

//ex: o let x possuí(hasOwnProperty) o valor x ("x") ?

let obj1 = {
    first: "Anastacia"
}
console.log(obj1.first)

delete obj1.first
console.log(obj1.first)
