'use strict'

runGame();

// function to run the game
function runGame() {
    createGrid()
}


// function to create a 16*16 grid
function createGrid() {
    for(let i = 0; i < 16; i++) {
        console.log('*');
        for(let j = 0; j < 16; j++) {
            console.log('*')
        }
    }
}


// function to create a div
function createDiv() {
    const div = document.createElement('div');
    
}   