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

console.log('hi there')

// Get all path elements in the SVG
// Get all path elements in the SVG
// var paths = document.querySelectorAll("path");
var svg = document.getElementById("nc-map");
var paths = svg.querySelectorAll("path");

console.log(paths) 
// Add the "county" class to all path elements

// Change the fill color of all path elements


console.log(test) 

// Create an unordered list for the county names
var counties = document.getElementById('counties');
var header = document.createElement('h1')
header.innerHTML = `The Fist Count is ${paths[0].id}`
counties.appendChild(header)
var list = document.createElement('ul');
counties.appendChild(list);

// Append each county name to the list
var pathArray = Array.from(paths);
pathArray.forEach(function(path) {
  var listItem = document.createElement('li');
  listItem.innerHTML = path.id;
  list.appendChild(listItem);
});

// Test sentence
var test = "The first county is " + pathArray[0].id;
var testDiv = document.createElement('h1')
testDiv.textContent = test
counties.appendChild(testDiv)


