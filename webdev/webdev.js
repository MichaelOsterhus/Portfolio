//Header content
const headContent = `<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../css/homestyle.css">
<link rel="apple-touch-icon" sizes="180x180" href="../img/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="../img/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../img/favicon-16x16.png">
<link rel="manifest" href="../img/site.webmanifest">
`

const headElement = document.querySelector('head');
headElement.insertAdjacentHTML('beforeend', headContent);

//Menu content
const menuContent = `<a href="../index.html">
<div class="logo">
   <img src="../img/4EC_logo32.png"/>
<h1>Michael Osterhus</h1>
</div>
</a>

<div id="wrapper"> 
<div class="wrap">

   <h3>PROJECTS</h3>
   <a class="goal" href="webdev.html">Web Development</a>
   <a class="goal" href="../blogs.html">Blogs</a>
   <a class="goal" href="../vidanim.html">Video / Animation</a>
   <a class="goal" href="../digpaint.html">Digital Painting</a>         

</div>

</div>`

const bodyElement = document.querySelector('body');
bodyElement.insertAdjacentHTML('afterbegin', menuContent);

//Putting the project array
 const projArray = [
       "Photo_Editor_Project/index.html",
       "Puzzle_App/index.html",   
       "Check_News/index.html",
       "Dynamic_Map/index.html",
       "Speed_Read_Sacred_Texts/index.html",
       "",
       "",
       "",
       "",
       "",
       "", 
       "",
]
 
 console.log(projArray[0].caption)
 for (i=0; i < projArray.length; i++){
    const project = document.getElementById('projects')
    const div = document.createElement('div')
    div.classList.add('thumbnail')
    const displayName = projArray[i].replace(/_/g, ' ').replace('/index.html', '');
    div.innerHTML = `
    <a href="${projArray[i]}" target="_blank">
    <div class="tnimage">${i+1}</div> 
    <caption>${displayName}</caption>
    </a>
    `   
    
    if (projArray[i] !== ""){
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

    

