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
    const d = path.getAttribute('d')
    calculatePathCenter(d)
    console.log(`${path.id} d = ${calculatePathCenter(d).x}, ${calculatePathCenter(d).y}`)
  });

var counties = document.getElementById('counties');
for (i = 0; i < paths.length; i++) {
  var countyName = paths[i].id.replace('NC_', ' '); 
  var div = document.createElement('div');
  div.id = paths[i].id
  div.classList.add('county-name')
  div.textContent = countyName;
  div.style.top = `${i * 10}px`
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








