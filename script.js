// Global variables


// wait for DOM to load

document.addEventListener("DOMContentLoaded", () => {
    // Div for squares
    const squareContainer = document.querySelector(".sqrContainer");

    // Initialize with a 16x16 container
    createGrid(squareContainer, 16);
    // Test replaceChildren and add a new 20x20 container
    createGrid(squareContainer, 20);
});

// Square constructor
const squareConstructor = function(){
    const basicSquare = document.createElement("div");
    basicSquare.className = "squareDiv";

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