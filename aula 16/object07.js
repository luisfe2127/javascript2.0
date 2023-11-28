const x = new Set(["a", "b", "c"]);

console.log([...x][1]);

/*const a = "a"
const b = "b"
const c = "c"

const y = new Set()

x.add(a)
x.add(b)
x.add(c)
x.add(e)
x.add(f)*/

const minhaArray = [1, 2, 3];
const iterador = minhaArray[Symbol.iterator]();

console.log(iterador.next());  // { value: 1, done: false }
console.log(iterador.next());  // { value: 2, done: false }
console.log(iterador.next());  // { value: 3, done: false }
console.log(iterador.next());  // { value: undefined, done: true }

