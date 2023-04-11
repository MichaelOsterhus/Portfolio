window.onload = function() {


const img1 = new Image();
img1.src = 'old.jpg';

const img2 = new Image();
img2.src = 'new.jpg';


const canvas1 = document.getElementById('canvas-1');
canvas1.width = img1.width * 2;
canvas1.height = img1.height;
const ctx1 = canvas1.getContext('2d');
//draw image1
img1.onload = () => {
    const dx = 0
    const dy = 100
    const dW = img1.width / 1.2
    const dH = img1.height / 1.2
ctx1.drawImage(img1, dx, dy, dW, dH, 0, 0, img1.width, img1.height);
}
//draw image2
img2.onload = () => {
    const ctx1 = canvas1.getContext('2d');
    const sx = 240
    const sy = 0
    const sW = img1.width / .9
    const sH = canvas1.height / .9
ctx1.drawImage(img2, sx, sy, sW, sH, img1.width, 0, img1.width, canvas1.height)
}

const canvas2 = document.getElementById('canvas-2');
canvas2.width = canvas1.width;
canvas2.height = canvas1.height;
const ctx2 = canvas2.getContext('2d');
// ctx2.drawImage(img2, 0, 0);
const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);

// const finalCanvas = document.getElementById('canvas');
// finalCanvas.width = img1.width * 2;
// finalCanvas.height = img1.height;
// const ctx = finalCanvas.getContext('2d');
// const imageData1 = ctx1.getImageData(0, 0, img1.width, img1.height);
// const imageData2 = ctx2.getImageData(img1.width, 0, img1.width, img1.height);
// const imageData = ctx.createImageData(canvas1.width, canvas1.height);
// for (let i = 0; i < imageData.data.length; i += 4) {
//   imageData.data[i] = imageData1.data[i];
//   imageData.data[i + 1] = imageData1.data[i + 1];
//   imageData.data[i + 2] = imageData1.data[i + 2];
//   imageData.data[i + 3] = imageData1.data[i + 3];
//   if (imageData2.data[i + 3] > 0) {
//     imageData.data[i] = imageData2.data[i];
//     imageData.data[i + 1] = imageData2.data[i + 1];
//     imageData.data[i + 2] = imageData2.data[i + 2];
//     imageData.data[i + 3] = imageData2.data[i + 3];
//   }
// }
ctx2.putImageData(imageData1, 0, 0);

const img = new Image();
img.src = finalCanvas.toDataURL('image/png');


const link = document.createElement('a');
link.download = 'final.png';
finalCanvas.toBlob(blob => {
  link.href = URL.createObjectURL(blob);
  link.click();
});
}
