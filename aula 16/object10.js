const animal = {
    tipo: "animal",
    som: "som de um animal",
    emitirSom: function() {
        console.log(this.som)
    }
}

animal.emitirSom()

const gato = {
    tipo: "gato",
    som: "miau",
}

Object.setPrototypeOf(gato, animal)
gato.emitirSom()

const gatoRaivoso = {
    tipo: "gato",
    emitirSom: function() {
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatoRaivoso, gato)
gatoRaivoso.emitirSom()

console.log(Object.getPrototypeOf(gatoRaivoso))

