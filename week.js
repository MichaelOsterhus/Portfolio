let DoTW = [
   {
      "name": "Sunday",
      "text": "Going to breakfast"
   },
   {
      "name": "Monday",
      "text": "Going to lunch"
   },
   {
      "name": "Tuesday",
      "text": "Going to lunch"
   },
   {
      "name": "Wednesday",
      "text": "Going to lunch"
   },
   {
      "name": "Thursday",
      "text": "Going to lunch"
   },
   {
      "name": "Friday",
      "text": "Going to lunch"
   },
   {
      "name": "Saturday",
      "text": "Going to lunch"
   }

]


function showDayText(dayName, dayMessage){
   const dayText = document.getElementById('hiddenText')
   const newDay = document.createElement("div")
   newDay.id = 'dayText'
   const dayHeader = document.createElement('h4')
   dayHeader.textContent = dayName

   const newText = document.createElement('div')
   newText.id = 'newMessage' 
   newText.textContent = dayMessage
   newDay.appendChild(dayHeader)
   newDay.appendChild(newText)
   dayText.appendChild(newDay)
   
}

function removeText(){
   const deleteText = document.getElementById('hiddenText')
   const findText = document.getElementById('dayText')
   deleteText.removeChild(findText)
}



function mouseMove(day) {
   document.getElementById(day.name).addEventListener('mouseover', () => {
      showDayText(day.name, day.text)

   })
   document.getElementById(day.name).addEventListener('mouseout', () => {
      removeText()
   
   })
}
DoTW.forEach(mouseMove)

   





// showDayText(sunday);