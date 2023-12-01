let nome = document.getElementById("inome");
let serie = document.getElementById("iserie");
let escola = document.getElementById("iescola");
let bi1x = document.getElementById("i1bi")
let bi2x = document.getElementById("i2bi")
let bi3x = document.getElementById("i3bi")
let bi4x = document.getElementById("i4bi")
let res = document.getElementById("res")

function gerar() {
   let bi1 = Number(bi1x.value) 
   let bi2 = Number(bi2x.value)
   let bi3 = Number(bi3x.value)
   let bi4 = Number(bi4x.value)

   const resultado = (bi1 + bi2 + bi3 + bi4) / 4

   if(resultado >= 6) {
    res.innerHTML = `${nome.value} da instituição ${escola.value}, foi aprovado da ${serie.value}º Série com a média total de ${resultado} pontos.`
   } else if (resultado >= 5) {
    res.innerHTML = `${nome.value} da instituição ${escola.value}, está de recuperação da ${serie.value}º Série com a média total de ${resultado} pontos.`
   } else {
    res.innerHTML = `${nome.value} da instituição ${escola.value}, está reprovado/retido da ${serie.value}º Série com a média total de ${resultado} pontos.`
   }
}


