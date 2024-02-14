//push = adiciona +1
//pop = remove o ultimo elemento 
//shift = remove o primeiro elemento
//unshift = adiciona um elemento para o primeiro elemento dentro de uma array
//reverse = deixar ao contrario (reverter)
//get = captura/imprime qualquer valor de uma lista
//set = pode modificar qualquer valor de uma lista (por isso, o metodo get e super importante para o set funcionar)
//remove = remove qualquer valor em qualquer posiçao 
//Insert = pode adionar qualquer valor em qualquer posiçao da lista




const filaDoBanco = []

 filaDoBanco.push("Jorge","Sorza","Vitor","Celso","Lucas","Boinha")

 console.log(filaDoBanco)

 filaDoBanco.pop()
 filaDoBanco.pop()

 console.log(filaDoBanco)

 filaDoBanco.unshift("jao")

 console.log(filaDoBanco)

 filaDoBanco.shift()
 filaDoBanco.shift()

 console.log(filaDoBanco)

 filaDoBanco.reverse()

 console.log(filaDoBanco)

 let _v = 0;

 let obj = {
    get v() {
        return "Value:" + _v;
    },
    set v(value) {
        _v = value * 2;
    }
 }

 console.log(obj)
