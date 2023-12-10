'use strict';

const body = document.querySelector('body');

// create buttons area and initialize button
const buttons = document.createElement('section');
buttons.id = 'buttons';
body.append(buttons);

const sizeButton = document.createElement('button');
const colorBlack = document.createElement('button');
const colorRandom = document.createElement('button');

// create etch-a-sketch game area
const game = document.createElement('section');
game.id = 'game';
body.append(game);

// initialize variables for size and color
let size = 16;
let color = 'black';

runGame();

// function to run the game
function runGame() {
    
    createSizeButton();
    changeColorBlack();
    changeColorRandom();

    createGrid(size)
    // listen for click anywhere in the game board and call
    game.addEventListener('click', color);
    sizeButton.addEventListener('click', changeGrid)
}


// function to create a 16*16 grid
function createGrid(size) {

    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            createDiv();
        }
    }
}


// function to create a div
// below 9, the divs overflow
function createDiv() {

    const div = document.createElement('div');
    
    let width = (game.offsetWidth / size)-1.2; 
   
    // using just width and height did not work, not sure why
    div.setAttribute('style', 'min-width: '+ width + 'px; ' + 'max-width: '+ width + 'px; ' + 'max-height: '+ width + 'px; ' + 'min-height: '+ width + 'px; ');
    game.append(div);
}   

// function to create a button to change size of grid
function createSizeButton() {
    sizeButton.innerText = 'Change Grid Size';
    buttons.append(sizeButton);
}

// function to create a button to change color to black
function changeColorBlack() {
    colorBlack.style.backgroundColor = 'black';
    buttons.append(colorBlack);    
}

// function to create a button to get random color
function changeColorRandom() {
    colorRandom.style.backgroundImage = 'linear-gradient(to right, red, orange, yellow, green, blue)'
    buttons.append(colorRandom);
}

// have the divs change color when mouse goes over them
function color() {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    }))
}

// function to reset the grid and change its size
function changeGrid() {
   game.textContent = '';
   size = prompt("Give a number of squares per side for your new grid: ")

   createGrid(size);

}
