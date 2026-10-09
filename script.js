window.onload = function() {
    setupRandomGreeting();
    setupProfileInteraction();
};

function setupRandomGreeting() {
    const greetingElement = document.getElementById("greeting");
    
    if (greetingElement) {
        const greetings = ["Hello!", "Welcome!", "Hi there!", "Greetings!"];
        
        const randomIndex = Math.floor(Math.random() * greetings.length);
        
        greetingElement.textContent = greetings[randomIndex];
    }
}

function setupProfileInteraction() {
    const profilePic = document.getElementById("profile-pic");
    
    if (profilePic) {
        profilePic.onclick = function(event) {
            const clickX = event.clientX;
            const clickY = event.clientY;
            
            alert("Ready to craft the next great gaming experience!");
        };
    }
}