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

    // Draw the image onto the temporary canvas
  const tempContext = tempCanvas.getContext('2d');
  const sourceX = 200
  const sourceY = 300
  const tWidth = img.width * 2/3
  const tHeight = img.width * 2/3 
  tempCanvas.width = tWidth - sourceX;
  tempCanvas.height = tHeight - sourceY;
  const destWidth = tempCanvas.width;
  const destHeight = tempCanvas.height;
  tempContext.drawImage(img, sourceX, sourceY, tWidth, tHeight, 0, 0, destWidth, destHeight);
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
}




// Set the source of the image object
img.src = 'path/to/your/image.png';
