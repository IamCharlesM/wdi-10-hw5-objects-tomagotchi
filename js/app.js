/*

<!--             Clicker         -->

let clicker = {
    clickCount: 0,
    clicker: function() {
        clicker.clickCount ++;
        console.log("You hear an electronic 'click'.")
        
    }
    
}

*/

let myInformation = {
    name: "Charles McGregory",
    age: 26,
    tidbit: "When no one is around, I lay on the floor and pretend to be a discarded sock.",
    statement: function() {
    let aged = myInformation.age + 10;
    console.log("Greetings random person, my government name is " + myInformation.name + " but they call me Petty Rosevelt out here in these screets, you feel me? " +myInformation.tidbit + " and in ten years I'll be " + aged + ".")
},
    timeWarp: function() {
        myInformation.age ++
    },
    fbi: function(protection) {
    myInformation.name = protection;
}
}
myInformation.fbi("Kittens")
myInformation.timeWarp()
console.log(myInformation.age)
console.log(myInformation.name)