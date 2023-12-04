function Person (pnome, snome, idade, gostos) {
    this.pnome = pnome
    this.snome = snome
    this.idade = idade
    this.gostos = gostos
}

let person1 = new Person("Jully", "Alvez", 17, ["musica", "gatos", "filmes", "humor"])

console.log(person1)

let person2 = Object.create(person1)

console.log(person2)

