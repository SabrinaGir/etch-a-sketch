'use strict';

const body = document.querySelector('body');

// create etch-a-sketch game area
const game = document.createElement('section');
body.append(game);

runGame();



// function to run the game
function runGame() {
    createSizeButton()
    createGrid()
    // listen for click anywhere in the game board and call
    game.addEventListener('click', color);
}


// function to create a 16*16 grid
function createGrid() {

    for(let i = 0; i < 17; i++) {
        for(let j = 0; j < 16; j++) {
            createDiv();
        }
    }
}


// function to create a div
function createDiv() {
    const div = document.createElement('div');
    game.append(div);
}   

function createSizeButton() {
    const sizeButton = document.createElement('button');
    body.append(sizeButton);
}

function color() {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'red';
    }))
}
