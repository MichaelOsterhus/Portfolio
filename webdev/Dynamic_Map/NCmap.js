
window.addEventListener('load', function() {

var svg = document.getElementById('svg-object').contentDocument;

  // Get all path elements in the SVG
var paths = svg.querySelectorAll('path');
let pathArray = []
paths.forEach(function(path) {
   pathArray.push(path);
});
pathArray.sort()

var svgObject = document.getElementById('svg-object')
const viewportWidth = window.innerWidth; // get the viewport width of the browser window
const displayedMapWidth = svgObject.getBoundingClientRect().width; // get the displayed map width
const displayedMapHeight = svgObject.getBoundingClientRect().height; // get the displayed map height
const svgTag = svg.querySelector('svg')
const viewBox = svgTag.getAttribute('viewBox'); // get the viewBox attribute value
const viewBoxValues = viewBox.split(' ').map(parseFloat); // parse and convert the values to numbers
const viewBoxWidth = viewBoxValues[2]; // get the width value
const viewBoxHeight = viewBoxValues[3]; // get the width value
const scaleFactor = displayedMapWidth / viewBoxWidth

// console.log(`The viewport width = ${viewportWidth}`)
// console.log(`The display width = ${displayedMapWidth} the height = ${displayedMapHeight} and the ratio is ${displayedMapWidth / displayedMapHeight}`)
// console.log(`The viewBox width = ${viewBoxWidth} the height = ${viewBoxHeight} and the ratio is ${viewBoxWidth / viewBoxHeight}`)
// console.log(`The svg-object width = ${svgObject.width}`)


function calculatePathCenter(pathString) {
  let points = pathString.match(/(-?\d+(\.\d+)?)/g).map(Number); // extract numbers from path string
  let xMin = Math.min(...points.filter((p, i) => i % 2 === 0)); // find minimum x value
  let xMax = Math.max(...points.filter((p, i) => i % 2 === 0)); // find maximum x value
  let yMin = Math.min(...points.filter((p, i) => i % 2 === 1)); // find minimum y value
  let yMax = Math.max(...points.filter((p, i) => i % 2 === 1)); // find maximum y value
  let centerX = (xMin + xMax) / 2 * scaleFactor; // calculate x coordinate of center
  let centerY = (yMin + yMax) / 2 * scaleFactor; // calculate y coordinate of center
  return { x: centerX, y: centerY }; // return center point as object
}

paths.forEach(function(path) {
    path.style.fill = '#000';
    path.style.stroke = '#666'
    path.style.strokeWidth = .4
    const d = path.getAttribute('d')
  });

var counties = document.getElementById('counties');
const countyNames = [];

for (i = 0; i < paths.length; i++) {
  var countyName = paths[i].id.replace('NC_', ' '); 
  countyNames.push(countyName);
}
countyNames.sort()

for (i = 0; i < countyNames.length; i++) {
  var div = document.createElement('div');
  div.id = countyNames[i]
  div.classList.add('county-name')
  div.textContent = countyNames[i]
  counties.appendChild(div);

}

const cName = document.querySelectorAll('.county-name')
cName.forEach(function(name) {
  const cIndex = countyNames.indexOf(name.id)
  name.addEventListener('mouseover', function () {
    pathArray[cIndex].style.fill = 'red'
  })
  name.addEventListener('mouseout', function () {
    pathArray[cIndex].style.fill = 'black'
  });
})


// console.log(countyNames)
// document.querySelectorAll('county-name').addEventListener('load', function () {

//   paths.forEach(path => {
//     const countyName = svg.getElementById(path.id);
  
//     path.addEventListener('mouseover', function () {
//       countyNames.forEach(name => {
//         name.style.display = 'none';
//       });

//       countyName.style.display = 'block';
//     });

//  
//   });
// });





});

// function calculatePathCenter(pathString) {
//   let points = pathString.match(/(-?\d+(\.\d+)?)/g).map(Number); // extract numbers from path string
//   let xMin = Math.min(...points.filter((p, i) => i % 2 === 0)); // find minimum x value
//   let xMax = Math.max(...points.filter((p, i) => i % 2 === 0)); // find maximum x value
//   let yMin = Math.min(...points.filter((p, i) => i % 2 === 1)); // find minimum y value
//   let yMax = Math.max(...points.filter((p, i) => i % 2 === 1)); // find maximum y value
//   let centerX = (xMin + xMax) / 2; // calculate x coordinate of center
//   let centerY = (yMin + yMax) / 2; // calculate y coordinate of center
//   const bbox = path.getBBox();
//   const x = bbox.x + bbox.width / 2;
//   const y = bbox.y + bbox.height / 2;
//   const scalingFactor = displayedMapWidth / viewportWidth; // replace these with your actual values
//   return { x: x * scalingFactor, y: y * scalingFactor };
//   return { x: centerX, y: centerY }; // return center point as object
// }



// function calculatePathCenter(pathString, scaleFactor) {
//   let points = pathString.match(/(-?\d+(\.\d+)?)/g).map(Number); // extract numbers from path string
//   let xMin = Math.min(...points.filter((p, i) => i % 2 === 0)); // find minimum x value
//   let xMax = Math.max(...points.filter((p, i) => i % 2 === 0)); // find maximum x value
//   let yMin = Math.min(...points.filter((p, i) => i % 2 === 1)); // find minimum y value
//   let yMax = Math.max(...points.filter((p, i) => i % 2 === 1)); // find maximum y value
//   let centerX = (xMin + xMax) / 2 * scaleFactor; // calculate x coordinate of center with scaling
//   let centerY = (yMin + yMax) / 2 * scaleFactor; // calculate y coordinate of center with scaling
//   return { x: centerX, y: centerY }; // return center point as object
// }





