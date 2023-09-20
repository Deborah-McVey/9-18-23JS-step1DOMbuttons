/* STEP 1: DOM & DOM EVENTS
Aim: Create buttons that change the background of the document in three different ways

Look through the JavaScript document object
| ./dom.html |

[ ] Add an onclick event to the first button
Walkthrough the code we have
Add an onclick event to call a function in JavaScript to update the background
<!-- Button 1: inline HTML -->
<button class="btn btn_inline" onclick="changeBackground()">Button 1</button>
🔻 | ./dom.js |

[ ] Create a function that changes the background of the document

Create a new function
Inside that function, change the body.style.backgroundColor to "#bae6fd"
NOTE: it is cleanest to have all the functionality in JavaScript (separation of concerns)

// * Inline HTML * \\
function changeBackground() {
	document.body.style.backgroundColor = '#bae6fd';
}
🔻

[ ] Change background on a single button using JavaScript onclick property
Create a new variable to select the second button
Set the .onclick property on the variable equal to a function that changes the body's background to "#a7f3d0"
// * JavaScript button onclick property * \\
const javascriptSingleButton = document.querySelector('.btn_onclick');

javascriptSingleButton.onclick = function () {
	document.body.style.backgroundColor = '#a7f3d0';
};
🔻

[ ] Change background on multiple buttons dynamically using JavaScript onclick properties
Change the querySelector to querySelectorAll
Use the forEach method to loop over all the buttons in the node list and set the body's background style
// * JavaScript button onclick properties * \\
const javascriptMultipleButtons = document.querySelectorAll('.btn_onclick');

javascriptMultipleButtons.forEach((button) => {
	button.onclick = function () {
		document.body.style.backgroundColor = '#a7f3d0';
	};
});
🔻

[ ] Code a function to change the background to a random color
Create a function that generates a random hexadecimal value
Set the documents body's background color to the random value
// * JavaScript Event listener * \\
function changeBgToRandom() {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);

	document.body.style.backgroundColor = `#${randomColor}`;
}
🔻

[ ] Add event listeners that call the changeBgToRandom function
Create a variable that selects the fifth button
Add an event listener to the variable, listen for the "click" event, and call the changeBgToRandom function
Add an event listener to the variable, listen for the "mouseenter" event, and call the changeBgToRandom function
// * JavaScript Event listener * \\
function changeBgToRandom() {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);

	document.body.style.backgroundColor = `#${randomColor}`;
}

const eventListenerButton = document.querySelector('.btn_event-listener');
eventListenerButton.addEventListener('click', changeBgToRandom);
eventListenerButton.addEventListener('mouseenter', changeBgToRandom);
🔻

Check: Ensure each button does what we expect
Does the first button change the background color to "#bae6fd"?
Do the second, third, and fourth buttons change the color to "#a7f3d0"?
Does the fifth button change the background to a random color on hover and mouse click? */

function changeBackground() {
	document.body.style.backgroundColor = '#bae6fd';
}

const javascriptSingleButton = document.querySelector('.btn_onclick');

javascriptSingleButton.onclick = function () {
	document.body.style.backgroundColor = '#dcd0ff';
};

const javascriptMultipleButtons = document.querySelectorAll('.btn_onclick');

javascriptMultipleButtons.forEach((button) => {
	button.onclick = function () {
		document.body.style.backgroundColor = '#dcd0ff';
	};
});

function changeBgToRandom() {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);

	document.body.style.backgroundColor = `#${randomColor}`;
}

const eventListenerButton = document.querySelector('.btn_event_listener');
eventListenerButton.addEventListener('click', changeBgToRandom);
eventListenerButton.addEventListener('mouseenter', changeBgToRandom);