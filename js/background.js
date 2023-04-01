const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight
const xc = canvas.width / 2; // center of canvas
const yc = canvas.height / 2;

const img = new Image();
const scale = img.width / canvas.width
console.log(scale)
img.src = '../img/background-sketch.png';
img.onload = function() {
  const sourceWidth = img.width * 2/3;
  const sourceHeight = img.height * 2/3;
  const destWidth = sourceWidth;
  const destHeight = sourceHeight;
  ctx.drawImage(img, 0, 0, sourceWidth, sourceHeight, 0, 0, destWidth, destHeight);
}


// const img = new Image();
// img.src = 'image.png';
// img.onload = function() {
//   const sourceX = 0;
//   const sourceY = 0;
//   const sourceWidth = img.width * 2/3;
//   const sourceHeight = img.height * 2/3;
//   const destX = 0;
//   const destY = 0;
//   const destWidth = sourceWidth;
//   const destHeight = sourceHeight;
//   ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
// }
