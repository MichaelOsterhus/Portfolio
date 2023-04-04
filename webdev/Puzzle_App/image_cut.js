

const image = new Image()
image.src = "../../img/maidenNred2.jpg"
image.onload = function() {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  // Set canvas size to a square that fits inside the image
  const size = Math.min(image.width, image.height)
  canvas.width = size
  canvas.height = size

  // Draw the image on the canvas
  const x = (image.width - size) / 2
  const y = (image.height - size) / 2
  context.drawImage(image, x, y, size, size, 0, 0, size, size)

  // Split the canvas into 64 equal-sized pieces
  const squareSize = size / 8
  const imageData = context.getImageData(0, 0, size, size)
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const canvas = document.createElement('canvas')
      canvas.width = squareSize
      canvas.height = squareSize
      const context = canvas.getContext('2d')
      const startX = col * squareSize
      const startY = row * squareSize
      context.putImageData(
        imageData,
        -startX, -startY,
        startX, startY,
        squareSize, squareSize
      )

      // Add the canvas to the game grid
      const gameGrid = document.getElementById('gamegrid')
      const square = document.createElement('div')
      square.classList.add('square')
      square.style.backgroundImage = `url(${canvas.toDataURL()})`
      gameGrid.appendChild(square)
    }
  }
}
