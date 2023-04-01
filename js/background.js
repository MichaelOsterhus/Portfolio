const canvas = document.getElementById('final');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight
canvas.width = window.innerWidth
const xc = canvas.width / 2; // center of canvas
const yc = canvas.height / 2;

const img = new Image();
img.src = '../img/background-sketch.png';
const foreground = new Image();
foreground.src = "../img/4EC_logo.png";
img.onload = function() {
  
  console.log(`The canvas width is ${canvas.width}`)
  console.log(`The image width is ${img.width}`)
    // Create a temporary canvas element
  const tempCanvas = document.createElement('canvas');
    // Draw the image onto the temporary canvas
  const tempContext = tempCanvas.getContext('2d');
  const sourceX = 100
  const sourceY = 500
  const tWidth = img.width * 2/3
  const tHeight = img.width * 2/3 
  tempCanvas.width = tWidth - sourceX;
  tempCanvas.height = tHeight
  const destWidth = tempCanvas.width;
  const destHeight = tempCanvas.height;
  tempContext.drawImage(img, sourceX, sourceY, tWidth, tHeight, 0, 0, destWidth, destHeight);
    // Get the pixel data for the canvas
  const imageData = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
  const pixelData = imageData.data;
  const greyValue = 25
    // Loop through the pixel data and remove white pixels
  for (let i = 0; i < pixelData.length; i += 4) {
    const r = pixelData[i];
    const g = pixelData[i + 1];
    const b = pixelData[i + 2]; 
         if (r > 200 && g > 200 && b > 200) {
        pixelData[i + 3] = 0; // Set alpha to 0 for white pixels
      } else {
        pixelData[i] = greyValue; // Set R value to 50 for non-white pixels
        pixelData[i + 1] = greyValue; // Set G value to 50 for non-white pixels
        pixelData[i + 2] = greyValue; // Set B value to 50 for non-white pixels
      }
    }
  
    // Put the modified pixel data back onto the temporary canvas
    tempContext.putImageData(imageData, 0, 0);
    console.log(`Temp canvas width is ${tempCanvas.width}`)
    console.log(`The temp canvas height is ${tempCanvas.height}`)
    
    const scale = tempCanvas.width / canvas.width
  
    // Draw the modified image onto your main canvas
    console.log(`Scale = ${scale}`)
    console.log(`Canvas height = ${canvas.height}`)
    ctx.drawImage(tempCanvas, 0, 0);
    ctx.drawImage(foreground, xc - (foreground.width/2), yc - (foreground.height/2))
}


