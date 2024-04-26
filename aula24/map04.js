//Clone

const original = new Map([[1, "um"]]);

const clone = new Map(original);

console.log(clone.get(1)); // um
console.log(original === clone); // false (Útil para comparações superficiais)

//Mesclagem 

const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "Three"],
]);

const second = new Map([
    [1, "uno"],
    [2, "dos"],
]);

// Mescla dois maps. A última chave a se repetir vence.
// O operador spread essenciamente converte um Map para um Array

const mergede = new Map([...first, ...second]);

console.log(mergede.get(1))

const first01 = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);
  
  const second01 = new Map([
    [1, "uno"],
    [2, "dos"],
  ]);
  
  // Mescla maps com um array. A última chave a se repetir vence.
  const merged = new Map([...first01, ...second01, [1, "eins"]]);
  
  console.log(merged.get(1)); // eins
  console.log(merged.get(2)); // dos
  console.log(merged.get(3)); // three