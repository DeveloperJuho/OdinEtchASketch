// Global variables


// wait for DOM to load

document.addEventListener("DOMContentLoaded", () => {
    // Div for squares
    const squareContainer = document.querySelector(".sqrContainer");
    const resetButton = document.querySelector(".sqrButton");

    resetButton.addEventListener("click", () =>{
        const inputField = document.querySelector(".sqrInput");

        if(Number(inputField.value) <= 64 && Number(inputField.value > 0)){
            createGrid(squareContainer, inputField.value);
        }     
        else{
            createGrid(squareContainer, 16);
        }   
    });

    // Initialize with a 16x16 container
    createGrid(squareContainer, 16);

});

// Square constructor
const squareConstructor = function(){
    const basicSquare = document.createElement("div");
    basicSquare.className = "squareDiv";

    basicSquare.addEventListener("mouseenter", () => {
        basicSquare.classList.add("painted");
    });

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