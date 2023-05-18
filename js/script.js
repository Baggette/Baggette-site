//detect user input
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