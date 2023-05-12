const image = new Image();
image.src = "../../img/maidenNred2.jpg";
console.log(image.width)
console.log(image.height)
if (image.width >= image.height) {
  image.height = 800;
} else {
  image.width = 800;
}


let unedited = document.getElementById('image');

const img = document.createElement('img');
img.src = image.src;
img.width = 800;
unedited.appendChild(img);

image.addEventListener('load', function() {
    const canvas = document.getElementById('display');
    const context = canvas.getContext('2d');
  
    // Set canvas size to a square that fits inside the image
    const size = Math.min(image.width, image.height);
    canvas.width = size;
    canvas.height = size;
    console.log(size);
  
    // Draw the image on the canvas
    const x = (image.width - size) / 2;
    const y = (image.height - size) / 2;
    context.drawImage(image, x, y, size, size, 0, 0, 800, 800);

// Split the canvas into 64 equal-sized pieces
const squareSize = size / 8;
const imageData = context.getImageData(0, 0, size, size);
const squares = [];

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const canvas = document.createElement('canvas');
    canvas.width = squareSize;
    canvas.height = squareSize;
    const context = canvas.getContext('2d');
    const startX = col * squareSize;
    const startY = row * squareSize;
    context.putImageData(
      imageData,
      -startX, -startY,
      startX, startY,
      squareSize, squareSize
    );
    squares.push(canvas.toDataURL());
  }
}

// Add the squares to the game grid
const gameGrid = document.getElementById('first');
const gameGridShuffle = document.getElementById('second');

function putSquares(arr, div) {
    for (let i = 0; i < arr.length; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundImage = `url(${arr[i]})`;
        square.setAttribute('draggable', true);
        square.textContent = i;
        div.appendChild(square);

      //   let imageBeingDragged
      //   let imageBeingReplaced
      //   let squareIdBeingDragged
      //   let squareIdBeingReplaced

      //   squares.forEach(square => square.addEventListener('dragstart', dragStart))
      //   squares.forEach(square => square.addEventListener('drag', dragEnd))
      //   squares.forEach(square => square.addEventListener('dragover', dragOver))
      //   squares.forEach(square => square.addEventListener('dragenter', dragEnter))
      //   squares.forEach(square => square.addEventListener('dragleave', dragLeave))
      //   squares.forEach(square => square.addEventListener('drop', dragDrop))

      //   function dragStart() {
      //     imageBeingDragged = this.style.backgroundImage
      //     squareIdBeingDragged = parseInt(this.id)

      //     console.log(imageBeingDragged, squareIdBeingDragged)

      //   }
      //   function dragEnd() {

      //   }
      //   function dragOver(e) {  
      //     e.preventDefault()
      //   }
      //   function dragEnter() {

      //   }
      //   function dragLeave() {
        
      //   }
      //   function dragDrop() {
      //     imageBeingReplaced = this.style.backgroundImage
      //     squareIdBeingReplaced = parseInt(this.id)
      //     this.style.backgroundImage = imageBeingDragged
      //     squares[squareIdBeingDragged].style.backgroundImage = imageBeingReplaced
      //   }
      }
}

putSquares(squares, gameGrid)

const newSquares = [];

while (squares.length > 0) {
  const randomIndex = Math.floor(Math.random() * squares.length);
  const randomItem = squares.splice(randomIndex, 1)[0];
  newSquares.push(randomItem);
}

putSquares(newSquares, gameGridShuffle)




})