let buffer = new ArrayBuffer(16)

if(buffer.byteLength === 16) {
  console.log("É igual a 16 bits")
} else {
  console.log("Nao é igual a 16 bits")
}

let int32View = new Int32Array(buffer);

for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i * 2;
  }

  console.log(int32View)

  let int16View = new Int16Array(buffer);

for (let i = 0; i < int16View.length; i++) {
  console.log("Posição " + i + ": " + int16View[i]);
}