/*

<!--             Clicker         -->

let clicker = {
    clickCount: 0,
    clicker: function() {
        clicker.clickCount ++;
        console.log("You hear an electronic 'click'.")
        
    }
    
}
<!--                 Name -->


let myInformation = {
    name: "Charles McGregory",
    age: 26,
    tidbit: "When no one is around, I lay on the floor and pretend to be a discarded sock.",
    statement: function() {
    let aged = myInformation.age + 10;
    console.log("Greetings random person, my government name is " + myInformation.name + " but they call me Petty Rosevelt out here in these screets, you feel me? " +myInformation.tidbit + " and in ten years I'll be " + aged + ".")
},
    // I want to get older
    timeWarp: function() {
        myInformation.age ++
    },
    // I want to change my name
    fbi: function(protection) {
    myInformation.name = protection;
}
}
myInformation.fbi("Rumpelstiltskin")
myInformation.timeWarp()
console.log(myInformation.age)
console.log(myInformation.name)
<!--                 Greater -->


let greeter = {
// say hello
    hello: function(name) {
        console.log("What's good " + name + "?")
    },//say goodbye
    goodbye: function(name) {
        console.log("Peace out " + name + ".")
    },//remember who you are
    whoAreYou: function(name) {
        console.log("Yo name was " + name + "right?")
    }
}
<!--                     Strings -->



let stringCollector = {
	collection: [],
    //put words into array
	collect: function (str) {
		let cut = str.split(" ");
		let reverse = cut.reverse();
		this.collection.push(reverse);
		console.log(this.collection);
	},//call words from aray
    admireCollection: function() {
        for (i = 0; i < this.collection.length; i++) {
            console.log(this.collection[i])
        }
    }
}

<!--                 ATM -->
*/

let atm = {
	totalCash: 200000,
	dispenseTwenties: function(num) {
		this.totalCash = this.totalCash - (20 * num)
		if (this.totalCash >= 0) {
			console.log(20 * num);
		} else if (this.totalCash <= 0) {
			return null;
		}
	}
}