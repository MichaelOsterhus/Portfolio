//try code with out dom content loaded putting 
//script tag in footer. 

document.addEventListener('DOMContentLoaded', () => {

   const grid = document.querySelector('.grid')
   const width = 8
   let squares = []
   // const shuffleSquares = []
   const candyColors = [
      'red',
      'yellow',
      'orange',
      'purple',
      'green',
      'blue'

   ]

   function createBoard() {
      for (let i = 0; i < width*width; i++) {
         const square = document.createElement('div')
         square.setAttribute('draggable', true)
         square.setAttribute('id', i)
         // const number = document.createElement('p')
         square.textContent = square.id
         let randomColor = Math.floor(Math.random() * candyColors.length)

         // let red = 0
         // let green = 0
         // let blue = 0
         square.style.backgroundColor = candyColors[randomColor]
         grid.appendChild(square)
         // square.appendChild(number)
         squares.push(square)
      }
   }
   createBoard()

   const button = document.querySelector('#jumble')
   button.addEventListener('click', function(){
      squares = []
      while (grid.firstChild) {
         grid.removeChild(grid.firstChild);
     }
      
      createBoard()     
      console.log(squares)
   })

   let colorBeingDragged
   let colorBeingReplaced
   let squareIdBeingDragged
   let squareIdBeingReplaced

   squares.forEach(square => square.addEventListener('dragstart', dragStart))
   squares.forEach(square => square.addEventListener('drag', dragEnd))
   squares.forEach(square => square.addEventListener('dragover', dragOver))
   squares.forEach(square => square.addEventListener('dragenter', dragEnter))
   squares.forEach(square => square.addEventListener('dragleave', dragLeave))
   squares.forEach(square => square.addEventListener('drop', dragDrop))

   function dragStart() {
      colorBeingDragged = this.style.backgroundColor
      squareIdBeingDragged = parseInt(this.id)

      console.log(colorBeingDragged, squareIdBeingDragged)

   }
   function dragEnd() {
  
   }
   function dragOver(e) {  
      e.preventDefault()
   }
   function dragEnter() {

   }
   function dragLeave() {
    
   }
   function dragDrop() {
      colorBeingReplaced = this.style.backgroundColor
      squareIdBeingReplaced = parseInt(this.id)
      this.style.backgroundColor = colorBeingDragged
      squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced
   }
   
   // function shuffleBoard() {
   //    while(squares.length > 0){
   //       let newNumb = squares.splice(Math.floor(Math.random() * squares.length), 1)
   //       shuffleSquares.push(newNumb)
   //    }
   //    return shuffleSquares
   // }

    // let showShuffle = shuffleBoard()

})