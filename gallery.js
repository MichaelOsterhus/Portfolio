// get all thumbnail images
var thumbnailImgs = document.querySelectorAll('.thumbnail img');

// create modal overlay element
var modal = document.createElement('div');
modal.classList.add('modal');

// create image element for full-sized image
var modalImg = document.createElement('img');

// create previous and next buttons
var prevButton = document.createElement('button');
prevButton.classList.add('prev');
prevButton.innerHTML = '&lt;';
var nextButton = document.createElement('button');
nextButton.classList.add('next');
nextButton.innerHTML = '&gt;';

// add event listener to each thumbnail image
thumbnailImgs.forEach(function(thumbnailImg, index) {
  thumbnailImg.addEventListener('click', function() {
    // get full-size image URL
    var fullsizeUrl = thumbnailImg.dataset.fullsize;

    // set modal image source and index
    modalImg.src = fullsizeUrl;
    modalImg.dataset.index = index;

    // add modal image and navigation buttons to modal overlay
    modal.innerHTML = '';
    modal.appendChild(modalImg);
    modal.appendChild(prevButton);
    modal.appendChild(nextButton);

    // add dim-page class to body
    document.body.classList.add('dim-page');

    // add modal overlay to body
    document.body.appendChild(modal);

    // add event listeners to navigation buttons
    prevButton.addEventListener('click', showPreviousImage);
    nextButton.addEventListener('click', showNextImage);
  });
});

// function to show previous image
function showPreviousImage() {
  var currentIndex = parseInt(modalImg.dataset.index);
  var previousIndex = (currentIndex - 1 + thumbnailImgs.length) % thumbnailImgs.length;
  var previousFullsizeUrl = thumbnailImgs[previousIndex].dataset.fullsize;
  modalImg.src = previousFullsizeUrl;
  modalImg.dataset.index = previousIndex;
}

