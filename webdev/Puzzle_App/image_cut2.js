import { image, squarePD } from './image_cut.js';


// Add the squares to the game grid
const gameGrid = document.getElementById('first');

image.addEventListener('load', function() {

function demoSquares(arr, div) {
    for (let i = 0; i < arr.length; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundImage = `url(${arr[i]})`;
        square.setAttribute('draggable', true);
        square.id = i;
        square.textContent = i;
        div.appendChild(square);
      }
    
      }


demoSquares(squarePD, gameGrid)

})
