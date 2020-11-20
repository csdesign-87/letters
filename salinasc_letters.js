// the array of letters
const letter =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 

// secret letter represents the random key
var secretletter = Math.floor(Math.random()*26);

// click letter, takes an event related to keyboard press
function clickletter(event) {
	// console.log("pressed: " + event.key);
	// console.log("secret:" + letter[secretletter]);
	if (letter[secretletter] === event.key) {
		const hTag = document.createElement('h3');
   	 	hTag.textContent = "SECRET KEY " + letter[secretletter] + " PRESSED";
    		
		const body = document.querySelector('body');
		body.appendChild(hTag);

		secretletter = Math.floor(Math.random()*26);
	}
}