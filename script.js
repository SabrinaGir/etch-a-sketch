'use strict';

const body = document.querySelector('body');

// create etch-a-sketch game area
const sizeButton = document.createElement('button');
createSizeButton()

const game = document.createElement('section');
body.append(game);

let size = 16;


runGame();




// function to run the game
function runGame() {
    
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
function createDiv() {

    const div = document.createElement('div');
    
    console.log(game.offsetWidth / size);
    
    let width = (game.offsetWidth / size); 
   
    div.setAttribute('style', 'min-width: '+ width + 'px; ' + 'max-width: '+ width + 'px; ' + 'max-height: '+ width + 'px; ' + 'min-height: '+ width + 'px; ');
    // div.setAttribute('style', 'max-width: '+ width + 'px');

    // div.setAttribute('style', 'min-width: '+width + 'px');
    // div.setAttribute('style', 'min-width: '+width + 'px');


    // div.style.maxWidth = game.width / size;
    // div.style.maxHeight = game.height / size;
    // div.style.minWidth = game. width / size;
    // div.style.minHeight = game.height / size;

    game.append(div);
}   

// function to create a button to change size of grid
function createSizeButton() {
    sizeButton.innerText = 'Change Grid Size';
    body.append(sizeButton);
}

// have the divs change color when mouse goes over them
function color() {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'red';
    }))
}

// function to reset the grid and change its size
function changeGrid() {
   game.textContent = '';
   size = prompt("Give a number of squares per side for your new grid: ")

   createGrid(size);

}
