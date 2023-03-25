const printEl = document.querySelector(`.notes`);
let linebreak;

function Note(note) {
   const newNote = document.createElement("div");
   linebreak = document.createElement('br');
   newNote.textContent = note;   
   printEl.appendChild(newNote);
   printEl.appendChild(linebreak);
   
}

function Link(ref, cont) {
   const a = document.createElement('a')
   linebreak = document.createElement('br')
   a.href = ref
   a.textContent = cont
   a.target = 'blank'
   printEl.appendChild(a)
   printEl.appendChild(linebreak)
}

function newImage(source) {
   const img = document.createElement('img')
   linebreak = document.createElement('br')
   img.src = source
   img.width = 400
   printEl.appendChild(img)
   printEl.appendChild(linebreak)
}

function Break() {
   const br = document.createElement('br')
   printEl.appendChild(br)
}


Note('In the beginning was the word, and the word was with God.')