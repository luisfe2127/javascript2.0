//Errado 

const wrongMap = new Map();
wrongMap["bla"] = "blaa";
wrongMap["bla2"] = "blaaa2";
console.log(wrongMap);
wrongMap.has("bla"); // false
wrongMap.delete("bla"); // false
console.log(wrongMap);

//Certo

const contacts = new Map()

contacts.set("Zozin", {Telefone: "161234567890", Endereço: "Castanhare Pitiula"})
contacts.set("Jorfin", {Telefone: "162468013579", Endereço: "Professor Raluques"})
console.log(contacts)
console.log("o valor encontrado é: " + contacts.has("Jorfin"))
console.log("Informações: " + contacts.get("Jorfin"))
console.log("Tamanho da lista: " + contacts.size)

const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size) // 3

// getting the values
console.log(myMap.get(keyString)); // "valor associado a 'a string'"
console.log(myMap.get(keyObj)); // "valor associado a keyObj"
console.log(myMap.get(keyFunc)); // "valor associado a keyFunc"

console.log(myMap.get("a string")); // "valor associado a 'a string'"
// porque keyString === 'a string'
console.log(myMap.get({})); // undefined, porque keyObj !== {}
console.log(myMap.get(function () {})); // undefined, porque keyFunc !== function () {}
