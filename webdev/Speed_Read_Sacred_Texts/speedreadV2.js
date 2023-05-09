const speedReaderDisplay = document.getElementById('reader');
const textContainer = document.getElementById('text-container');
const words = textContainer.textContent.split(' ');

let currentIndex = 0;

function updateDisplay() {
  speedReaderDisplay.textContent = words[currentIndex];
  highlightWord();
  currentIndex++;
  if (currentIndex >= words.length) {
    clearInterval(intervalId);
  }
}

function highlightWord() {
  const paragraphs = textContainer.querySelectorAll('p');
  let wordCount = 0;
  for (let i = 0; i < paragraphs.length; i++) {
    const paragraphWords = paragraphs[i].textContent.split(' ');
    for (let j = 0; j < paragraphWords.length; j++) {
      if (wordCount === currentIndex) {
        paragraphWords[j] = `<span class="highlight">${paragraphWords[j]}</span>`;
      }
      wordCount++;
    }
    paragraphs[i].innerHTML = paragraphWords.join(' ');
  }
}

let intervalId = setInterval(updateDisplay, 200);

textContainer.addEventListener('scroll', () => {
  const scrollPercentage = textContainer.scrollTop / (textContainer.scrollHeight - textContainer.clientHeight);
  speedReaderDisplay.style.opacity = 1 - scrollPercentage;
});

