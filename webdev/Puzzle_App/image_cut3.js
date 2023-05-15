import { image, squarePD } from "./image_cut.js";

// Add the squares to the game grid



image.addEventListener('load', function() {
    const gameGridShuffle = document.getElementById('second');
    let squares = squarePD.map((pixelData, index) => {
    return { id: index, pixelData: pixelData };
  });

// Shuffle squares
    const newSquares = [];

    while (squares.length > 0) {
    const randomIndex = Math.floor(Math.random() * squares.length);
    const randomItem = squares.splice(randomIndex, 1)[0];
    newSquares.push(randomItem);
    }
// Put shuffled squares on the board

function putSquares(arr, div) {  
    for (let i = 0; i < arr.length; i++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.backgroundImage = `url(${arr[i].pixelData})`;
      square.setAttribute('draggable', true);
      square.id = i
      div.appendChild(square);
      square.addEventListener('dragstart', dragStart);
      square.addEventListener('dragend', dragEnd);
      square.addEventListener('dragover', dragOver);
      square.addEventListener('dragenter', dragEnter);
        // square.addEventListener('dragleave', dragLeave);
      square.addEventListener('drop', dragDrop);
    }
    let currTile
    let otherTile
    console.table(arr)
    function checkSquare(sq) {
        const squareId = sq.id;
        console.log(`The type of squareId is ${typeof(squareId)}`)
        const correctSquare = arr.find((s) => s.id === parseInt(squareId));
        console.log(`The ID of the position is ${squareId}`)
        console.log(`The ID of the pixel data at 0 is ${correctSquare.id} it's index is ${arr.indexOf(correctSquare)}`)
        // return correctSquare.pixelData === sq.style.backgroundImage;
      }

      function dragStart() {
        currTile = this
      }
      function dragOver(e) {  
        e.preventDefault()
      }
      function dragEnter(e) {
        e.preventDefault()
      }
      function dragDrop() {
        otherTile = this
        let currImg = currTile.style.backgroundImage
        let otherImg = otherTile.style.backgroundImage
        currTile.style.backgroundImage = otherImg
        otherTile.style.backgroundImage = currImg
        
      }
      function dragEnd() {
        checkSquare(otherTile)
        // if (checkSquare(otherTile)) {
        //     this.style.border = "1px solid green"
        // }
    }

  }

putSquares(newSquares, gameGridShuffle)

})
