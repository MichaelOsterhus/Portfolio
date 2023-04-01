const canvas = document.getElementById('final');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight
const xc = canvas.width / 2; // center of canvas
const yc = canvas.height / 2;

const img = new Image();
img.src = '../img/background-sketch.png';
img.onload = function() {
  const scale = img.width / canvas.width
  console.log(`The canvas width is ${canvas.width}`)
  console.log(`The image width is ${img.width}`)
  console.log(`The scale is ${scale}`)
    // Create a temporary canvas element
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = img.width;
    tempCanvas.height = img.height;
  
    // Draw the image onto the temporary canvas
    const tempContext = tempCanvas.getContext('2d');
    tempContext.drawImage(img, 0, 0);
  const sourceX = 200
  const sourceY = 300
  const sourceWidth = img.width * 2/3 - sourceX;
  const sourceHeight = img.height * 2/3 - sourceY;
  const scale2 = sourceWidth / canvas.width;
  const destWidth = canvas.width;
  const destHeight = sourceHeight;
  ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, destWidth, destHeight);
}



// Wait for the image to load
img.onload = function() {


  // Get the pixel data for the canvas
  const imageData = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
  const pixelData = imageData.data;

  // Loop through the pixel data and remove white pixels
  for (let i = 0; i < pixelData.length; i += 4) {
    const r = pixelData[i];
    const g = pixelData[i + 1];
    const b = pixelData[i + 2];
    if (r === 255 && g === 255 && b === 255) {
      pixelData[i + 3] = 0; // Set alpha to 0 for white pixels
    }
  }

  // Put the modified pixel data back onto the temporary canvas
  tempContext.putImageData(imageData, 0, 0);

  // Draw the modified image onto your main canvas
  context.drawImage(tempCanvas, 0, 0);
};

// Set the source of the image object
img.src = 'path/to/your/image.png';
