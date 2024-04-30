const mySet = new Set()

let o = {a: 1, b: 2}
mySet.add(1).add(2).add(3).add(4).add(5).add(5).add("text").add(o).add({a: 1, b: 2})

console.log(mySet)

// loga os itens na ordem: 1, "texto"
for (let item of mySet) console.log(item);

// loga os itens na ordem: 1, "texto"
for (let item of mySet.keys()) console.log(item);

// loga os itens na ordem: 1, "texto"
for (let item of mySet.values()) console.log(item);

// loga os itens na ordem: 1, "texto"
//(key e value são os mesmos aqui)
for (let [key, value] of mySet.entries()) console.log(key);
 
// a conversão entre Set e Array
const mySet2 = new Set([1,2,3,4,5])
console.log(mySet2)
console.log("Valroes: " + mySet2 + " Tamanho: " + mySet2.size)
console.log([...mySet2])

// Iterar entradas set com forEach
mySet.forEach(function(value) {
    console.log(value);
  });