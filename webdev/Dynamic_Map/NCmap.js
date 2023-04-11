// Get all path elements in the SVG
var paths = document.querySelectorAll("path");

// Add the "county" class to all path elements
paths.forEach(function(path) {
  path.classList.add("county");
});

paths.forEach(function(path){
    path.style.fill = "#fff"
})