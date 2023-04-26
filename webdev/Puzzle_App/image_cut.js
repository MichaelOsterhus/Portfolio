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
  const dataURL = canvas.toDataURL();
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

      // Add the canvas to the game grid
      const gameGrid = document.getElementById('gamegrid');
      const square = document.createElement('div');
      square.classList.add('square');
      square.style.backgroundImage = `url(${dataURL})`;
      square.setAttribute('draggable', true)
      gameGrid.appendChild(square);
    }
  }
});