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
    project.appendChild(div)
 }

const thumbnailDivs = document.querySelectorAll('.thumbnail'); 

thumbnailDivs.forEach((div, index) => {
    div.addEventListener('mouseover', () => {
      const hue = (index * 30) % 360; // Calculate the hue value based on the div's index
      div.style.backgroundColor = `hsl(${hue}, 50%, 50%)`; // Set the background color using the calculated hue value
      div.classList.add('thumbnail-hover'); // Add the CSS class to specify the transition properties
    });
    
    div.addEventListener('mouseout', () => {
      div.style.backgroundColor = ''; // Reset the background color to the original color
      div.classList.remove('thumbnail-hover'); // Remove the CSS class to remove the transition properties
    });
  });