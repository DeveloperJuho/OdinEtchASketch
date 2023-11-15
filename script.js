// Global variables

let selectedMode = "RGB";
let incrementAmount = 1;

// wait for DOM to load

document.addEventListener("DOMContentLoaded", () => {
    const squareContainer = document.querySelector(".sqrContainer");
    const resetButton = document.querySelector(".sqrButton");
    const normalButton = document.querySelector(".normalMode");
    const rgbButton = document.querySelector(".rgbMode");
    const incrementButton = document.querySelector(".blackMode");

    // Mode buttons, every mode resets blackening functions number
    normalButton.addEventListener("click", () => {
        incrementAmount = 1;
        selectedMode = "Normal";
    });

    rgbButton.addEventListener("click", () => {
        incrementAmount = 1;
        selectedMode = "RGB";
    });

    incrementButton.addEventListener("click", () => {
        incrementAmount = 1;
        selectedMode = "Increment";
    })

    // Reset button
    resetButton.addEventListener("click", () =>{
        const inputField = document.querySelector(".sqrInput");

        if(Number(inputField.value) <= 64 && Number(inputField.value > 0)){
            createGrid(squareContainer, inputField.value);
            incrementAmount = 1;
        }     
        else{
            createGrid(squareContainer, 16);
            incrementAmount = 1;
        }   
    });

    // Initialize with a 16x16 container
    createGrid(squareContainer, 16);

});

// Square constructor
const squareConstructor = function(){
    const basicSquare = document.createElement("div");
    basicSquare.className = "squareDiv";
    
    basicSquare.addEventListener("mouseover", () => paintMode(basicSquare));

    return basicSquare;
}

// Row constructor
const rowConstructor = function(divNumber){
    const basicRow = document.createElement("div");
    basicRow.className = "squareRow";

    for(let i = 0; i < divNumber; i++){
        basicRow.appendChild(squareConstructor());
    }

    return basicRow;
}

// Removes previous grid and replaces it with given number
const createGrid = function(sqrContainer, divNumber){
    sqrContainer.replaceChildren();

    for(let i = 0; i < divNumber; i++){
        sqrContainer.appendChild(rowConstructor(divNumber));
    }
}

// Painting function

const paintMode = (square) => {
    if(selectedMode == "Normal"){
        square.style.backgroundColor = "black";
    }

    else if(selectedMode == "RGB"){
        square.style.backgroundColor = `rgb(${(Math.floor(Math.random()*255))},${(Math.floor(Math.random()*255))},${(Math.floor(Math.random()*255))})`;
    }

    else if(selectedMode == "Increment"){
        if(incrementAmount >= 0.1){
            square.style.backgroundColor = `rgb(${incrementAmount*255},${incrementAmount*255},${incrementAmount*255})`;
        }
        incrementAmount -= 0.1;
    }
}