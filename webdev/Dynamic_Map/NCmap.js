window.addEventListener('load', function() {

  // Get the SVG element by ID
var svgObject = document.getElementById('svg-object').contentDocument;
// var svg = svgObject.getElementById("NC_Hyde");
// console.log(svg);

  // Get all path elements in the SVG
var paths = svgObject.querySelectorAll('path');
let pathArray = []
paths.forEach(function(path) {
   pathArray.push(path);
});
//??dkfwo
function calculatePathCenter(pathString) {
  let points = pathString.match(/(-?\d+(\.\d+)?)/g).map(Number); // extract numbers from path string
  let xMin = Math.min(...points.filter((p, i) => i % 2 === 0)); // find minimum x value
  let xMax = Math.max(...points.filter((p, i) => i % 2 === 0)); // find maximum x value
  let yMin = Math.min(...points.filter((p, i) => i % 2 === 1)); // find minimum y value
  let yMax = Math.max(...points.filter((p, i) => i % 2 === 1)); // find maximum y value
  let centerX = (xMin + xMax) / 2; // calculate x coordinate of center
  let centerY = (yMin + yMax) / 2; // calculate y coordinate of center
  return { x: centerX, y: centerY }; // return center point as object
}

paths.forEach(function(path) {
    path.style.fill = '#000';
    path.style.stroke = '#666'
    path.style.strokeWidth = .4
    const d = path.getAttribute('d')

  });

var counties = document.getElementById('counties');
for (i = 0; i < paths.length; i++) {
  var countyName = paths[i].id.replace('NC_', ' '); 
  var div = document.createElement('div');
  div.id = paths[i].id
  div.classList.add('county-name')
  div.textContent = countyName;
  const newD = paths[i].getAttribute('d')
  div.style.top = `${calculatePathCenter(newD).y}px`
  div.style.left = `${calculatePathCenter(newD).x}px`
  counties.appendChild(div);
};

const countyNames = document.querySelectorAll('.county-name');
// console.log(countyNames)
document.querySelector('#svg-object').addEventListener('load', function () {

  paths.forEach(path => {
    const countyName = svgObject.getElementById(path.id);
  
    path.addEventListener('mouseover', function () {
      countyNames.forEach(name => {
        name.style.display = 'none';
      });

      countyName.style.display = 'block';
    });

    path.addEventListener('mouseout', function () {
      countyName.style.display = 'none';
    });
  });
});
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





