
window.addEventListener('load', function() {

const censusAPIkey = 'dab7b36185f536dd42e20629c135a9fa1f74fcbc'
// Set up the URL with the necessary parameters and your API key
const url = `https://api.census.gov/data/2019/pep/population?get=POP&for=county:*&in=state:37&key=${censusAPIkey}`;
// Set up the URL with the necessary parameters and your API key

var svg = document.getElementById('svg-object').contentDocument;

  // Get all path elements in the SVG
var paths = svg.querySelectorAll('path');
let pathArray = []
paths.forEach(function(path) {
   pathArray.push(path);
});
let alphaPathArray = pathArray.sort((a, b) => {
  let idA = a.getAttribute('id');
  let idB = b.getAttribute('id');
  if (idA < idB) {
    return -1;
  }
  if (idA > idB) {
    return 1;
  }
  return 0;
});

paths.forEach(function(path) {
    path.style.transition = "fill 0.8s ease-out";
    path.style.transition = "stroke 1.2s ease-out";
    path.style.fill = '#000';
    path.style.stroke = '#666'
    path.style.strokeWidth = .4
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
    alphaPathArray[cIndex].style.stroke = 'white'
    alphaPathArray[cIndex].style.strokeWidth = 1.5

  })
  name.addEventListener('mouseout', function () {
    alphaPathArray[cIndex].style.stroke = '#666'
    alphaPathArray[cIndex].style.strokeWidth = .4
  });
})

let rangeAlpha = []
let rangeBeta = []
let rangeGamma = []
let rangeDelta = []
let rangeEpsilon = []

// Fetch the data from the Census API
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Process the data as neede
    const removeHead = data.slice(1)
    const sortedData = removeHead.sort((a, b) => a[2] - b[2]).map(county => ({
      population: county[0],
      stateCode: county[1],
      countyCode: county[2]
    }))
    // console.log(sortedData)
    let color = 60
    let red = []
    let green = []
    let blue = []

    const redShift = (color) => {
      for (i = 0; i < 5; i++) {
        red.push((i + 1) * color * .35)
      }
    }
    const greenShift = (color) => {
      for (i = 0; i < 5; i++) {
        green.push(i * color * .05)
      }
    }
    const blueShift = (color) => {
      for (i = 0; i < 5; i++) {
        blue.push(i * color * .005)
      }
    }

    redShift(color)
    greenShift(color)
    blueShift(color)

    for (i = 0; i < sortedData.length; i++) {
      // const value = Number(sortedData[i].population) / 200000 * 255  
      if (sortedData[i].population < 20000) {
        rangeAlpha.push(sortedData[i])
        // alphaPathArray[i].style.fill = `rgb(${red[0]}, ${green[0]}, ${blue[0]})`
        alphaPathArray[i].style.fill = `rgb(30, 20, 30)`
      } else if (sortedData[i].population < 40000) {
        rangeBeta.push(sortedData[i])
        // alphaPathArray[i].style.fill = `rgb(${red[1]}, ${green[1]}, ${blue[1]})`
        alphaPathArray[i].style.fill = `rgb(60, 30, 40)`
      } else if (sortedData[i].population < 60000) {
        rangeGamma.push(sortedData[i])
        // alphaPathArray[i].style.fill = `rgb(${red[2]}, ${green[2]}, ${blue[2]})`
        alphaPathArray[i].style.fill = `rgb(90, 0, 0)`
      } else if (sortedData[i].population < 100000) {
        rangeDelta.push(sortedData[i])
        // alphaPathArray[i].style.fill = `rgb(${red[3]}, ${green[3]}, ${blue[3]})`
        alphaPathArray[i].style.fill = `rgb(120, 0, 0)`
      } else if (sortedData[i].population < 140000){
        rangeEpsilon.push(sortedData[i])
        // alphaPathArray[i].style.fill = `rgb(${red[4]}, ${green[4]}, ${blue[4]})`
        alphaPathArray[i].style.fill = `rgb(150, 0, 0)`

      } else if (sortedData[i].population < 200000) {
        alphaPathArray[i].style.fill = `rgb(180, 0, 0)`

      } else {
        alphaPathArray[i].style.fill = `rgb(220, 50, 20)`
      }

    }    

  
  })
  .catch(error => console.error(error));
  const canf = document.getElementById("graphKey")
  const can = canf.getContext('2d')
  can.width = 700;
  can.height = 100;
  can.style.fill = `rgb(30, 20, 30)`
  can.fillRect(0, 0, 100, 100)

});

// const sortedData = data[1].sort((a, b) => a[2] - b[2]).map(county => ({
//   population: county[0],
//   stateCode: county[1],
//   countyCode: county[2]

// }));

// const countyCodes = data.map(county => countyCode(county[2])); // Use map instead of forEach
// for (i = 0; i < countyCodes.length; i++) {
//   console.log(`The population of county ${alphaPathArray[i].id} is ${sortedData[i].population}`);
// }
// });

//Code I didn't use

// var svgObject = document.getElementById('svg-object')

// const viewportWidth = window.innerWidth; // get the viewport width of the browser window
// const displayedMapWidth = svgObject.getBoundingClientRect().width; // get the displayed map width
// const displayedMapHeight = svgObject.getBoundingClientRect().height; // get the displayed map height
// const svgTag = svg.querySelector('svg')
// const viewBox = svgTag.getAttribute('viewBox'); // get the viewBox attribute value
// const viewBoxValues = viewBox.split(' ').map(parseFloat); // parse and convert the values to numbers
// const viewBoxWidth = viewBoxValues[2]; // get the width value
// const viewBoxHeight = viewBoxValues[3]; // get the width value
// const scaleFactor = displayedMapWidth / viewBoxWidth

// console.log(`The viewport width = ${viewportWidth}`)
// console.log(`The display width = ${displayedMapWidth} the height = ${displayedMapHeight} and the ratio is ${displayedMapWidth / displayedMapHeight}`)
// console.log(`The viewBox width = ${viewBoxWidth} the height = ${viewBoxHeight} and the ratio is ${viewBoxWidth / viewBoxHeight}`)
// console.log(`The svg-object width = ${svgObject.width}`)


// function calculatePathCenter(pathString) {
//   let points = pathString.match(/(-?\d+(\.\d+)?)/g).map(Number); // extract numbers from path string
//   let xMin = Math.min(...points.filter((p, i) => i % 2 === 0)); // find minimum x value
//   let xMax = Math.max(...points.filter((p, i) => i % 2 === 0)); // find maximum x value
//   let yMin = Math.min(...points.filter((p, i) => i % 2 === 1)); // find minimum y value
//   let yMax = Math.max(...points.filter((p, i) => i % 2 === 1)); // find maximum y value
//   let centerX = (xMin + xMax) / 2 * scaleFactor; // calculate x coordinate of center
//   let centerY = (yMin + yMax) / 2 * scaleFactor; // calculate y coordinate of center
//   return { x: centerX, y: centerY }; // return center point as object
// }

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

// print the sorted array
// for (i = 0; i < alphaPathArray.length; i++) {
//   console.log(`This is the alphaArray ${alphaPathArray[i].id}`);
// }
// console.log(`This is the alphaArray ${alphaPathArray[0].id}`);
// console.log(`This is the pathArray ${pathArray[0].id}`);

