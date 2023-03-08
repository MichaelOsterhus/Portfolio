const printEl = document.querySelector(`.notes`);




// function Note(note) {
//    const newNote = document.createElement("div");
//    linebreak = document.createElement('br');
//    newNote.textContent = note;   
//    printEl.appendChild(newNote);
//    printEl.appendChild(linebreak);
   
// }

// function Link(ref, cont) {
//    const a = document.createElement('a')
//    linebreak = document.createElement('br')
//    a.href = ref
//    a.textContent = cont
//    a.target = 'blank'
//    printEl.appendChild(a)
//    printEl.appendChild(linebreak)
// }

// function newImage(source) {
//    const img = document.createElement('img')
//    linebreak = document.createElement('br')
//    img.src = source
//    img.width = 400
//    printEl.appendChild(img)
//    printEl.appendChild(linebreak)
// }


class Post {
   constructor(postType) {
      this.type = postType
      this.content = null
   }
   getContent() {
      return this.content
   }
   setContent(postContent) {
      this.content = postContent
   }
   print(text){
      const nP = document.createElement(this.type)
      const linebreak = document.createElement('br');
      
      printEl.appendChild(nP);
      printEl.appendChild(linebreak);
      console.log(`this object is type: ${this.content}`)
   }
}

class Note extends Post {
   constructor(postContent) {
      this.content = postContent
   }
   getContent() {this.textContent = this.content;
}
}
class Link extends Post {
   constructor(href, content) {
      this.href = href
      this.content = content
   }

}
class Img extends Post {
   constructor(source){
      this.src = source
   }
}
//    }
//    note(content) {
//       this.content = content;
//       this.print(this.type)
//    } 
//    link(ref, content) {
//       this.type = 'a'
//       nP.href = ref
//       nP.textContent = postContent
//       nP.target = 'blank'
//       this.print(type)
//    }
//    img(source) {
//       this.type = 'img'
//       nP.src = source
//       nP.width = 400
//       this.print(type)
//    }
// }


let newNote = new Post('div')
// let newLink = new Post()
// let newImg = new Post()


// function Break() {
//    const br = document.createElement('br')
//    printEl.appendChild(br)
// }

newNote.print('Hello People.')
console.log(newNote)