// =============================================================================
// MDT312 Assignment 7  - Square Game
// Modern JavaScript: DOM, Event, Timer
// =============================================================================

window.onload = pageLoad;

let timer = null;

function pageLoad(){
	const startBtn = document.getElementById("start");
	startBtn.onclick = startGame;

	const gameLayer = document.getElementById("layer");
	gameLayer.onclick = function(event) {
		if (event.target.classList.contains("square")) {
			event.target.remove();
		}
	};
}

function startGame(){
	alert("Ready");
	clearScreen();
	addBox();
	timeStart();
}

function timeStart(){
	const TIMER_TICK = 1000;
	if (timer !== null) {
		clearInterval(timer);
		timer = null;
	}

	const min = 0.5;
	let second = min * 60; 
	const clockDisplay = document.getElementById('clock');
	clockDisplay.textContent = second;
	
	timer = setInterval(timeCount, TIMER_TICK);
	
	function timeCount(){
		const allbox = document.querySelectorAll("#layer div");
		
		if (allbox.length === 0 && second > 0) {
			alert("You win!");
			clearInterval(timer);
			timer = null;
			clearScreen();
			return;
		}

		if (second <= 0 && allbox.length > 0) {
			alert("Game over");
			clearInterval(timer);
			timer = null;
			clearScreen();
			return;
		}

		second--;
		clockDisplay.textContent = second;
	}
}

function addBox(){
	const numbox = parseInt(document.getElementById("numbox").value) || 0;
	const gameLayer = document.getElementById("layer");
	const colorDrop = document.getElementById("color").value;
	
	for (let i = 0; i < numbox; i++){
		const tempbox = document.createElement("div"); 
		tempbox.className = "square " + colorDrop;   
		tempbox.id = "box" + i;
		console.log(i);
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		
		gameLayer.appendChild(tempbox);
	}
}

function clearScreen(){
	const allbox = document.querySelectorAll("#layer div");
	for (let i = 0; i < allbox.length; i++) {
		allbox[i].remove();
	}

	timer = 0;
}