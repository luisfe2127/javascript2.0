//Funções aninhadas 

    //const soma = (...valores) => {
    //const somar = val => {
      //  let res = 0

       // for(v of val) 
          //  res += v
         //   return res
        
   // }
   // return somar(valores)
   // }

//console.log(soma(3,5,6))

const multiplicaçao = (...valores) => {
    const multiplicar = val => {
        let res = 1

        for(v of val) 
            res *= v
        return res
    }
    return multiplicar(valores)
}

console.log(multiplicaçao(2,3,8,10))


