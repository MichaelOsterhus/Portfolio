function displayClock(){
   var clock = new Date().toLocaleTimeString();
   document.getElementById('clock').innerHTML = clock;
   let today = new Date()
   let tS = today.toString().split(' ')
   let dateString = `${tS[0]} ${tS[1]} ${tS[2]} ${tS[3]} `
   document.getElementById('today').innerHTML = dateString
   setTimeout(displayClock, 1000); 
 }

 displayClock()

 function todoPost(item){
   const todo = document.getElementById('list')
   const linebreak = document.createElement('br')
   const newText = document.createElement("div")
   newText.id = 'newText'
   const newDate = document.createElement('div')
   newDate.id = 'newDate'
   const newPost = document.createElement('div') 
   newPost.id = 'newPost'
   newText.textContent = item.task
   newDate.Date = item.dateTime
   newDate.textContent = item.dateTime
   newPost.appendChild(newText)
   newPost.appendChild(newDate)
   todo.appendChild(newPost)
   todo.appendChild(linebreak)

 }

function getHours(num) {
   return num / 1000 / 60 / 60
}

/////Look at "JS Class Tutorial" for new ideas on classes for todo list

function checkDate(item){ 
   let appointment = new Date(item.dateTime).getTime()
   let currentDay = new Date().getTime()
   let hours = getHours(appointment - currentDay)
   let minutes = (hours - Math.floor(hours)) *  60
   const announcement = document.getElementById('announcements')
   const announce = document.createElement('div')
   announce.id = 'announce'
   const time = document.createElement('div')
   time.id = 'time'
   announce.textContent = item.task
   if(hours < 24 && hours > 0) {
      time.textContent = `${Math.floor(hours)} hrs ${Math.floor(minutes)} min`
      announcement.appendChild(announce)
      announcement.appendChild(time)
   } else if (hours >= 24 && hours < 336) {
      let days = Math.floor(hours / 24)
      time.textContent = `${days} days`
      announcement.appendChild(announce)
      announcement.appendChild(time)
   }

}

let todo = [
  {
     'task':'Work on ATGE story outline.',
     'dateTime': 'December 25, 2023 15:59:00'
  },
  {
     'task':'Appointment: RCCC ',
     'dateTime': 'November 30, 2022 16:30'
  }, 
  {
     'task': 'Buy a baby sprout hat',
     'dateTime': 'Dec 6, 2022 20:15'
  }
]

todo.forEach(todoPost)
todo.forEach(checkDate)