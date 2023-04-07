import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';

const codeElement = document.querySelector('pre.language-javascript');
Prism.highlightElement(codeElement);



    //test canvases 1,2, and 3
    const canvas1 = document.getElementById('canvas1');
    const ctx1 = canvas1.getContext('2d');
    const canvas2 = document.getElementById('canvas2');
    const ctx2 = canvas2.getContext('2d');
    const canvas3 = document.getElementById('canvas3');
    const ctx3 = canvas3.getContext('2d');
    
    const img = new Image();
    
    img.onload = function() {
      const sqWidth = img.width / 24;
      const sqHeight = img.height / 12;
      // Draw the image on canvas1
      ctx1.drawImage(img, 0, 0);
    
      // Redraw the image on canvas2 with modifications
      const imageData2 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    
      ctx2.putImageData(imageData2, 0, 0);
    
      //draw canvas3
      for (let y = 0; y < 12; y++) {
          for (let x = 0; x < 24; x++) {
            // Get the pixel data for this square
            const imageData3 = ctx1.getImageData(x * sqWidth, y * sqHeight, sqWidth, sqHeight);
            const data = imageData3.data;
            let redSum = 0;
            let greenSum = 0;
            let blueSum = 0;
            for (let i = 0; i < data.length; i += 4) {
              redSum += data[i];
              greenSum += data[i + 1];
              blueSum += data[i + 2];
            }
            let pixelCount = data.length / 4;
            let redAverage = redSum / pixelCount;
            let greenAverage = greenSum / pixelCount;
            let blueAverage = blueSum / pixelCount;
            ctx3.fillStyle = `rgb(${redAverage}, ${greenAverage}, ${blueAverage})`;
            ctx3.fillRect(x * sqWidth, y * sqHeight, sqWidth, sqHeight);
          }
          
        }
    };
    img.src = 'grid_world_600.png';
        