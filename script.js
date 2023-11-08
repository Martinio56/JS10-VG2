let colors = [
    "rgb(120,28,129)",
    "rgb(64,67,140)",
    "rgb(72,139,200)",
    "rgb(107,178,140)",
    "rgb(159,190,87)",
    "rgb(210,179,63)",
    "rgb(231,126,49)",
    "rgb(217,33,32)",
    "rgb(200,200,20)",
    "rgb(100,100,100)",
    "rgb(200, 100, 0)",
    "rgb(0, 0, 200)",
    "rgb(150, 150, 200)",
    "rgb(15, 205, 20)"]

let names = ["one", "two", "three", "four", "five", "six"]
let correctRand;
let correctColor;

// Function to start the game
function startGame() {
    correctRand = Math.floor(Math.random() * 6)
    correctColor = colors.splice(Math.floor(Math.random() * colors.length), 1)[0]

    // Display rgb value
    document.getElementById("rgbValue").textContent = correctColor.toUpperCase()

    // Assign colors to divs
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * colors.length)
        document.getElementById(names[i]).style.backgroundColor = colors[random]
        colors.splice(random, 1)
    }

    // Assign correct color
    document.getElementById(names[correctRand]).style.backgroundColor = correctColor
}

function checkColor(name) {
    if (name === names[correctRand]) {
        // Klikket på riktig farge
        for (let i = 0; i < 6; i++) {
            document.getElementById(names[i]).style.backgroundColor = correctColor
        }
    } else {
        // Klikket på feil farge
        // Implementer logikk for hva som skal skje når feil farge klikkes, for eksempel vis en melding.
    }
}

// Start the game when the "Start Game" button is clicked
document.getElementById("startGame").addEventListener("click", startGame);

// Win condition
document.getElementById(names[correctRand]).addEventListener("click", function () {
    for (let i = 0; i < 6; i++) {
        document.getElementById(names[i]).style.backgroundColor = correctColor
    }
});

// Fail condition
for (let i = 0; i < 6; i++) {
    document.getElementById(names[i]).addEventListener("click", function () {
        if (i !== correctRand) {
            // Handle fail condition here, for example, show a message or reduce the player's score.
        }
    });
}
