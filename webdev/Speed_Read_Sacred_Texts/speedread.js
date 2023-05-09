const textContainer = document.getElementById('text-container');
const select = document.getElementById('file-select');

const fileNames = ['The-Golden-Tractate-of-Hermes-Trismegistus.txt', 'The-Secret-of-the-Golden-Flower.txt'];
const fonts = ['Helvetica', 'Proxima Nova', 'Futura', 'Brandon Grotesque', 'Lato']
  


fileNames.forEach(fileName => {
  const displayName = fileName.replace(/-/g, ' ').replace('.txt', '');
  const link = document.createElement('a');
  link.textContent = displayName;
  link.href = '#';
  select.appendChild(link);
  link.addEventListener('click', (event) => {
    event.preventDefault(); // prevent the link from navigating to a new page
    fetch(fileName)
      .then(response => response.text())
      .then(text => {
        const pDiv = document.createElement('div')
        const paragraphs = text.split('\n\n');
        paragraphs.forEach(paragraph => {
          const p = document.createElement('p');
          p.textContent = paragraph;
          pDiv.appendChild(p);
        });
        textContainer.innerHTML = pDiv.innerHTML
        
      })
      .catch(error => console.error(error));
  });
});




let currentIndex = 0;
let currentWordIndex = 0;
let words = [];

function startReading() {
  const paragraphs = document.querySelectorAll('#text-container p');
  paragraphs.forEach(paragraph => {
    const paragraphWords = paragraph.textContent.split(' ');
    words.push(...paragraphWords);
    console.log(`The Words Are...${words}`)
  });
  words.push('');

  setInterval(() => {
    const currentWord = words[currentIndex];
    if (currentWord === '') {
      currentIndex = 0;
    } else {
      // const currentParagraph = document.querySelector(`#text-container p:nth-child(${currentWordIndex + 1})`);
      // const currentWordElement = currentParagraph.childNodes[currentWordIndex];
      // currentWordElement.classList.add('highlight');

      const wordLength = currentWord.length;
      const rediclePosition = Math.floor(wordLength / 2) - 1;

      const redicle = document.createElement('span');
      redicle.classList.add('redicle');
      redicle.textContent = currentWord[rediclePosition];
      const currentWordElement = document.getElementById('reader')

      currentWordElement.innerHTML = currentWord.slice(0, rediclePosition) + redicle.outerHTML + currentWord.slice(rediclePosition + 1);
      currentIndex += 1
      // currentWordIndex += 1;
      // if (currentWordIndex >= currentParagraph.textContent.split(' ').length) {
      //   currentWordIndex = 0;
      //   currentIndex += 1;
      // }
    }
  }, 200);
}

const button = document.getElementById('play-button')
button.addEventListener('click', startReading)
