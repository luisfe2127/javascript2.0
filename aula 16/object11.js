let object = {
    name: "Kars",
    city: "New York",
    getIntro: function() {
        console.log(this.name + "from" + this.city);
    } 
}

let object2 = {
    name: "Bills",
}

object2.__proto__ = object