const animal = {
    tipo: "animal",
    som: "som de animal",
    emitirSom: function() {
        console.log(this.som)
    }
}

const gato = {
    tipo: "gato",
    som: "miau",
}

Object.setPrototypeOf(gato, animal)
gato.emitirSom()

const gatoRaivoso = {
    tipo: "gatoRaivoso",
    miarForte: function() {
        console.log(this.som.toUpperCase())
    }
}
Object.setPrototypeOf(gatoRaivoso, gato)
gatoRaivoso.miarForte()

//Object.getPrototypeOf(gato)
//Object.getPrototypeOf(gatoRaivoso)