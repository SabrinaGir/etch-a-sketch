'use strict'

const body = document.querySelector('body');

runGame();

// function to run the game
function runGame() {
    createGrid()
}


// function to create a 16*16 grid
function createGrid() {
    for(let i = 0; i < 16; i++) {
        createDiv();
        for(let j = 0; j < 16; j++) {
            createDiv();
        }
    }
}


// function to create a div
function createDiv() {
    const div = document.createElement('div');
    body.append(div);
}   