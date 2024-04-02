//detect user input
function changefavicon(){
	// Create a new link element
	var link = document.createElement('link');
	
	// Set the required attributes for the link element
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	
	// Set the URL of the new favicon
	link.href = '../assets/bowser.ico';
	
	// Find the existing favicon (if any)
	var existingFavicon = document.querySelector("link[rel*='icon']");
	
	// Remove the existing favicon (if any)
	if (existingFavicon) {
	  existingFavicon.parentNode.removeChild(existingFavicon);
	}
	
	// Append the new favicon to the head section of the document
	document.head.appendChild(link);
}
function nyan(){
let sequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'] // Defines the keys that have to be pressed
		let index = 0
		window.addEventListener("keydown", async event => {

			if(index == -1)return; // Secret has already been activated, ignore further key presses

			// If the pressed key is the next one in the sequence, go further up the sequence. Otherwise, reset.
			if(event.key == sequence[index]){
				index += 1;
			}else{
				index = 0;
			}

			// Check if sequence has been entered
			if(index >= sequence.length){
                index = -1; // Prevent further key presses from activating the secret
                location.href = "./supersecretwebsite"
            }});
}
//peaches secret
function peaches(){
	let sequence = ['p', 'e', 'a', 'c', 'h', 'e', 's'] // Defines the keys that have to be pressed
		let index = 0
		window.addEventListener("keydown", async event => {

			if(index == -1)return; // Secret has already been activated, ignore further key presses

			// If the pressed key is the next one in the sequence, go further up the sequence. Otherwise, reset.
			if(event.key == sequence[index]){
				index += 1;
			}else{
				index = 0;
			}

			// Check if sequence has been entered
			if(index >= sequence.length){
				index = -1; // Prevent further key presses from activating the secret
				
				const name = document.getElementById("name");
				const text = document.getElementById("paragraph");
				alert("Bowser mode activated");
				changefavicon();1
				name.innerHTML = "Bowser";
				text.innerHTML = `
				This one is for my one and only true love
				Princess Peach
				Peach, you're so cool
				And with my star, we're gonna rule
				Peach, understand
				I'm gonna love you 'til the very end
				Peaches, Peaches, Peaches, Peaches, Peaches
				Peaches, Peaches, Peaches, Peaches, Peaches
				I love you, oh
				Peaches, Peaches, Peaches, Peaches, Peaches
				Peaches, Peaches, Peaches, Peaches, Peaches
				I love you, oh
				Mario, Luigi, and a Donkey Kong too
				A thousand troops of Koopas couldn't keep me from you
				Princess Peach, at the end of the line
				I'll make you mine, oh
				Peaches, Peaches, Peaches, Peaches, Peaches
				Peaches, Peaches, Peaches, Peaches, Peaches
				I love you, oh
				Peaches, Peaches, Peach, Peach`;
				var audio = new Audio("../assets/peaches.mp3");
				audio.play();
			}});
}
function visitors() {
	const url = '/counter.txt'
	fetch(url).then(r => r.text()).then(t => {const count = document.getElementById('visitors').innerHTML = 'Visitors: ' + t});
}
nyan()
peaches()
visitors()
