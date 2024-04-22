//Exercicios

//Vamos tentar 5 operações de array.

//Crie um array stylescom os itens “Jazz” e “Blues”.
//Adicione “Rock-n-Roll” ao final.
//Substitua o valor do meio por “Clássicos”. Seu código para encontrar o valor médio deve funcionar para qualquer array com comprimento ímpar.
//Retire o primeiro valor do array e mostre-o.
//Anexe Rape Reggaeao array.

let styles = ["Jazz", "Blues"]
console.log(styles)

styles.push("Rock-n-Roll")
console.log(styles)

styles[1] = "Classics"
console.log(styles)

styles.shift()
console.log(styles)

styles.unshift("Rap", "Reggae")
console.log(styles)

//Escreva a função sumInput()que:

//Solicita valores ao usuário usando prompte armazena os valores no array.
//Termina de perguntar quando o usuário insere um valor não numérico, uma string vazia ou pressiona “Cancelar”.
//Calcula e retorna a soma dos itens do array.
//PS Um zero 0é um número válido, por favor não pare a entrada em zero.

function sumInput() {
    let numbers = []
    
    while (true) {
    let value = prompt("A number please?", 0)
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value)
    }

    let sum = 0
  for (let number of numbers) {
    sum += number
  }
  return sum
}

console.log( sumInput() )

//A entrada é uma matriz de números, por exemplo arr = [1, -2, 3, 4, -9, 6].
//A tarefa é: encontrar o subarranjo contíguo arrcom a soma máxima dos itens.
//Escreva a função getMaxSubSum(arr)que retornará essa soma.
//Por exemplo:

//getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
//getMaxSubSum([2, -1, 2, 3, -9]) == 6
//getMaxSubSum([-1, 2, 3, -9, 11]) == 11
//getMaxSubSum([-2, -1, 1, 2]) == 3
//getMaxSubSum([100, -9, 2, -3, 5]) == 100
//getMaxSubSum([1, 2, 3]) == 6 (take all)

//Se todos os itens forem negativos, significa que não pegamos nenhum (o subarray está vazio), então a soma é zero:

//getMaxSubSum([-1, -2, -3]) = 0

function getMaxSubSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); 
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); 
  alert( getMaxSubSum([-2, -1, 1, 2]) ); 
  alert( getMaxSubSum([1, 2, 3]) ); 
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); 