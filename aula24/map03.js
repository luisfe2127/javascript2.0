const kvArray = [
    ["key01", "value01"],
    ["key02", "value02"]
]

const myMap = new Map(kvArray)

console.log(myMap.get("key01"))

// Use o Array.from() para transformar um map em um Array bidimensional de chaves e valores
console.log(Array.from(myMap)); // Irá exibir para você o mesmo Array como um Array chave-valor

// Uma forma sucinta de fazer o mesmo, utilizando a sintaxe spread
console.log([...myMap]);

// Ou use os iteradores keys() ou values(), e os converta para um array
console.log(Array.from(myMap.keys())); // ["key1", "key2"]