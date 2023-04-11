// Wait for the window to load before querying the SVG
window.addEventListener('load', function() {

  // Get the SVG element by ID


  // Get all path elements in the SVG
  var paths = querySelectorAll('path');

let pathArray = []


  // Add the "county" class to all path elements
  paths.forEach(function(path) {
    pathArray.push(path);
  });

  // Set the fill color of all path elements
  pathArray.forEach(function(path) {
    path.style.fill = '#fff';
  
  
  
  });

  // Create a list of county names
  var countyList = document.createElement('ul');
  paths.forEach(function(path) {
    var countyName = path.id.replace('_', ' ');
    var listItem = document.createElement('li');
    listItem.textContent = countyName;
    countyList.appendChild(listItem);
  });

  // Add the list to the page
  var counties = document.getElementById('counties');
  counties.appendChild(countyList);

});





var console = document.createElement("div");
console.setAttribute("id", "console");
document.body.appendChild(console);

// redirect console output to custom console
var log = console.log;
console.log = function(message) {
  var line = document.createElement("div");
  line.innerHTML = message;
  console.appendChild(line);
  log.apply(console, arguments);
};

// test the console

// function newFunction() {
//   var svg = document.getElementById("nc-map");
//   var paths = svg.querySelectorAll("path");
//   console.log(`He there paths are where `);
// }
// Get all path elements in the SVG
// Get all path elements in the SVG
// var paths = document.querySelectorAll("path");

// Add the "county" class to all path elements

// Change the fill color of all path elements
// console.log('hi there')

// console.log(test) 

// // Create an unordered list for the county names
// var counties = document.getElementById('counties');
// var header = document.createElement('h1')
// header.innerHTML = `The Fist Count is ${paths[0].id}`

// console.log(test) 

// counties.appendChild(header)
// var list = document.createElement('ul');
// counties.appendChild(list);
 
// console.log(test) 
// var testDiv = document.createElement('h1')
// testDiv.textContent = test
// counties.appendChild(testDiv)



// console.log(test) 
