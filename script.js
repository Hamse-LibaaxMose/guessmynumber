window.addEventListener("load", initApp)
console.log("jeg er i guessnumber")

// Globale variable 

const lblMessage = document.querySelector(".message") // querySelectoren finder en DOM element som vi gemmer den til en const lblMessage variable

const lblNumber = document.querySelector(".number")

const lblScore = document.querySelector(".score")

const inpGuess = document.querySelector(".guess")

const btnCheck = document.querySelector(".check")


const number = Math.floor(Math.random() * 20)

let startScore = 50 // start score

function initApp() {

    lblScore.textContent = startScore // manipulere med dom elementet ved at ændre i dets textContent 
    const btnCheck = document.querySelector(".check")
    //const btnAgain = 

    btnCheck.addEventListener("click", guess)

}


function guess() {
    console.log("inde")
    console.log(inpGuess.value)
    console.log(number)
    if (inpGuess.value == number) { 
        lblMessage.textContent = "tillykke du har gættet tallet"
        lblNumber.textContent = number

    }

    if (inpGuess.value != number) {
        startScore--
        lblScore.textContent = startScore

        lblMessage.textContent = "gæt igen"

    }

}


