'use strict';

const body = document.querySelector('body');
let opacityIsOn = false;

// create buttons area and initialize button
const buttons = document.createElement('section');
buttons.id = 'buttons';
body.append(buttons);

const sizeButton = document.createElement('button');

const opacityButtonOn = document.createElement('button');
const opacityButtonOff = document.createElement('button')

const colorBlack = document.createElement('button');
const colorWhite = document.createElement('button')
const colorRandom = document.createElement('button');

// create etch-a-sketch game area
const game = document.createElement('section');
game.id = 'game';
body.append(game);

// initialize variables for size and color
let size = 16;
let opacity = 1;
let addedOpacity = 0;
let color = '0,0,0'



runGame();

// function to run the game
function runGame() {
    
    createSizeButton();
    createOpacityButtons();
    createBlackButton();
    createWhiteButton();
    createRandomButton();

    createGrid(size)
    
    // add all event listeners 
    game.addEventListener('click', colorDiv);
    sizeButton.addEventListener('click', changeGrid);
    colorBlack.addEventListener('click', changeColorBlack);
    colorWhite.addEventListener('click', changeColorWhite);
    colorRandom.addEventListener('click', changeColorRandom);

    opacityButtonOn.addEventListener('click', opacityOn);
    opacityButtonOff.addEventListener('click', opacityOff);
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
    let borderSize = 1.2;

    const div = document.createElement('div');
    
    let width = (game.offsetWidth / size)-borderSize; 
   
    // using just width and height did not work, not sure why
    div.setAttribute('style', 'min-width: '+ width + 'px; ' + 'max-width: '+ width + 'px; ' + 'max-height: '+ width + 'px; ' + 'min-height: '+ width + 'px; ');
    game.append(div);
}   

// function to create a button to change size of grid
function createSizeButton() {
    sizeButton.innerText = 'Change Grid Size';
    buttons.append(sizeButton);
}

// function to create a button to turn on and off opacity
function createOpacityButtons() {

    opacityButtonOn.style.backgroundColor = 'rgba(0,0,0,0.2)';
    opacityButtonOn.classList.add('opacity')
    opacityButtonOn.innerText = 'ON';

    opacityButtonOff.style.backgroundColor = 'rgba(0,0,0,0.2)';
    opacityButtonOff.innerText = 'OFF';
    opacityButtonOff.classList.add('opacity')
    opacityButtonOff.style.display = 'none';


    buttons.append(opacityButtonOn);    
    buttons.append(opacityButtonOff);    
}

// function to create a button to change color to black
function createBlackButton() {
    colorBlack.style.backgroundColor = 'rgb(0,0,0)';
    buttons.append(colorBlack);    
}

function createWhiteButton() {
    colorWhite.style.backgroundColor = 'rgb(255,255,255)';
    buttons.append(colorWhite);
}

// function to create a button to get random color
function createRandomButton() {
    colorRandom.style.backgroundImage = 'linear-gradient(to right, red, orange, yellow, green, blue)'
    buttons.append(colorRandom);
}

// have the divs change color when mouse goes over them
function colorDiv() {

    const divs = document.querySelectorAll('div');
    divs.forEach(div => div.addEventListener('mouseover', () => {


        let div_opacity  =  Number(div.style.backgroundColor.slice(-4, -1));

        // console.log(div.style.backgroundColor.slice(-4, -1))
        // console.log(div.style.backgroundColor);


        if (opacityIsOn == true && div_opacity < 1.1 && div_opacity >= 0.1) {
            div_opacity = div_opacity + 0.1;
            div.style.backgroundColor = 'rgba(' + color + ',' + div_opacity + ')';
           

        } 
        else {
        div.style.backgroundColor = 'rgba(' + color + ',' + opacity + ')';
        }
    }))

   
}

// function to reset the grid and change its size
function changeGrid() {
   game.textContent = '';
   let sizeGood = false;

   size = prompt("Give a number of squares per side for your new grid: ")

   // makes sure that the size is valid
   while (sizeGood == false) {

        if (size == '') {
            size = 16;
            sizeGood = true;
        }
        else if (size > 48) {
            alert('Max size is 48')
            size = prompt("Give a number of squares per side for your new grid: ")
        }

        else if (size <= 1) {
            alert('Size must be over 1')
            size = prompt("Give a number of squares per side for your new grid: ")
        } 

        else {
            sizeGood = true;
        }
    }

    createGrid(size);
}


// function to change the hover color to black
function changeColorBlack() {
    color = '0,0,0';
    colorDiv();
}

// function to change the hover color to black
function changeColorWhite() {
    color = '255,255,255'
    colorDiv();
}

function changeColorRandom() {
    let r = Math.floor(Math.random() * 257);
    let g = Math.floor(Math.random() * 257);
    let b = Math.floor(Math.random() * 257);

    color = '' + r + ','+ g + ',' + b;

    console.log(color);

    colorDiv();
}

// opacity

function opacityOn() {
    opacityButtonOn.style.display = 'none'
    opacityButtonOff.style.display = ''
    opacityIsOn = true;

    opacity = 0.1;
}

function opacityOff() {
    opacityButtonOff.style.display = 'none'
    opacityButtonOn.style.display = ''
    opacityIsOn =
    opacity = 1;
}