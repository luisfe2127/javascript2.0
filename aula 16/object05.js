let message = "Hello world!";
let x = message.toUpperCase();

console.log(x);

/*const person = {
    fName: "John",
    lName: "Con",
    fullName: function() {return this.fName + " " + this.lName}
}

console.log(person.fullName)*/

const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };

  console.log(person.fullName)

  const perso = {
    id: 5670
  }

  console.log(perso.id)

  perso.id = 2178

  console.log(perso.id)




  
