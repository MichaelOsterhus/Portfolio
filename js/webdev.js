//projects
const projArray = [
    {
       url: "webdev/Photo_Editor_Project/index.html",
       caption: "Photo Editor Project"
    },
    {
       url: "webdev/Puzzle_App/index.html",
       caption: "Puzzle App"
    },
    {
       url: "webdev/Check_News/index.html",
       caption: "Check The News With Me"
    },
    {
       url: "wedev/Dynamic_Map/NCmap.html",
       caption: "Dynamic Data Visualization"
    },
    {
       url: "",
       caption: ""
    },
    {
       url: "",
       caption: ""
    },
    {
       url: "",
       caption: ""
    },
    {
       url: "",
       caption: ""
    },
    {
       url: "",
       caption: ""
    },
    {
       url: "",
       caption: ""
    },
    {
       url: "",
       caption: ""
    },
    {
       url: "",
       caption: ""
    },
 
 ]
 
 console.log(projArray[0].caption)
 for (i=0; i < projArray.length; i++){
    const project = document.getElementById('projects')
    const div = document.createElement('div')
    div.classList.add('thumbnail')
    div.innerHTML = `
    <a href="${projArray[i].url}" target="_blank">
    <div class="tnimage">${i+1}</div> 
    <caption>${projArray[i].caption}</caption>
    </a>
    `   
    
    if (projArray[i].url !== ""){
      const hue = (i * 30) % 360; // Calculate the hue value based on the div's index
      div.style.backgroundColor = `hsl(${hue}, 50%, 50%)`; // Set the background color using the calculated hue value
      const links = div.querySelector('.thumbnail a');
      console.log(links)
      links.style.color = 'white'
   } 
    project.appendChild(div)
 }

const thumbnailDivs = document.querySelectorAll('.thumbnail'); 

console.log(projArray[3].url)

// thumbnailDivs.forEach((div, index) => {

// })

    

