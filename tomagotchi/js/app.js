//systems

//emotions

//build
let tomagotchi = {
    name: "Shinron",
    creatureType: "Orb",
    foodInTummy: 10,
    restedness: 10,
    health: 10,
    cry: function() {
        this.foodInTummy --
    console.log("WAAAAAA!!!" + this.name + " is getting hungery and only has " + this.foodInTummy + " food left")
        
},
    puke: function() {
        console.log(this.name + " doesn't feel well: Bleeeh :0~~")
    },
    yawn: function() {
        console.log(this.name + " goes 'Yaaaawwwnnn'")
    },
    
}