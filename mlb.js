// Node.js program to demonstrate the
// fs.readdir() method
  
// Import the filesystem module
// const fs = require('fs');
// const folderPath = 'futa';
// Function to get current filenames
// in directory
// var imgArray = [];
// let images;
// fs.readdir(folderPath, (err, files) => {
//   if (err)
//     console.log(err);
//   else {
//     console.log("\nCurrent directory filenames:");
    
//     files.forEach(file => {
//       images = imgArray.push(file);
//     }) 
//   } console.log(images);
// })

let slideS = document.getElementById('slide');
let body = document.querySelector('body');
let slideShow = document.getElementById('slideshow');
let shuffle = document.getElementById('shuffle');
let overlay = document.getElementById('overlay');
let cover = document.getElementById('cover');


function imgScale() {
   let realWidth = slideS.naturalWidth;
   let realHeight = slideS.naturalHeight;
   let scale = 900 / realHeight;
   let scaledWidth = realWidth * scale;
   let scaledHeight = realHeight * scale;
   overlay.style.width = `${scaledWidth}px`;
   overlay.style.height = `${scaledHeight}px`;

 }

let x = 1;

let imgRandom = () => {
   x = Math.floor(Math.random() * 114) + 1;
   slideS.src = `futa/futa${x}.jpeg`;
   console.log(x);
}

let imgForward = () => {
   if (x <= 113) {
      x++;
   } else {
      x = 1;
   }
   slideS.src = `futa/futa${x}.jpeg`;
}

let imgBackward = () => {
   if (x > 1) {
      x--;
      console.log(x);
   } else {
      x = 114;
   }
   slideS.src = `futa/futa${x}.jpeg`;
}

let y = 114;
let shuffleArray = () => {
   let myArray = [];
   for (let i = 1; i < y; i++){
      myArray.push(i);
   }
   let newArray = [];
   while (newArray.length < y){
   let newNum = myArray.splice(Math.floor(Math.random() * myArray.length), 1);
   newArray.push(newNum);
   }
   return newArray;
}

let op; 
let ov;


let flashFade = () => {
   op = 0;
   ov = 1;
   setInterval(function(){
      slideS.style.opacity = op;
      if(op <= 1){
      op += .1
      console.log(op)}
      }, 50)
   setInterval(function(){
      cover.style.opacity = ov;
      if(ov >= 0){
      ov -= .05
      }
      }, 50)
} 
   


let show;
let j = 0;

let shuffleFunc = () => {
   let shuffle = shuffleArray();
   if (j < y) {
      show = setInterval(function() {
         j++
         slideS.src = `futa/futa${shuffle[j]}.jpeg`;
         console.log(shuffle[j])
      }, 3000)
   } else {
      j = 0;
   }
}

let myTime;

slideShow.addEventListener('click', function() {
   myTime = setInterval(imgForward, 3000);
});

shuffle.addEventListener('click', shuffleFunc);

slideS.addEventListener('click', function() {
   clearTimeout(myTime);
   clearTimeout(show);
   imgScale();
   flashFade();
   console.log('your click was registered')
});

body.addEventListener('keydown', (e) => {
   if (e.key === 'ArrowUp') {
      imgRandom()
   } else if (e.key === 'ArrowLeft') {
      imgBackward()
   } else if (e.key === 'ArrowRight') {
      imgForward()
   }
})








