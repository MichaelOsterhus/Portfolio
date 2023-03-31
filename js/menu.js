// Create the logo element
var logoLink = document.createElement('a');
logoLink.href = 'index.html';
var logoDiv = document.createElement('div');
logoDiv.className = 'logo';
var logoImg = document.createElement('img');
logoImg.src = 'img/4EC_logo32.png';
var logoH1 = document.createElement('h1');
logoH1.textContent = 'Michael Osterhus';
logoDiv.appendChild(logoImg);
logoDiv.appendChild(logoH1);
logoLink.appendChild(logoDiv);

// Create the wrapper element and its child elements
var wrapperDiv = document.createElement('div');
wrapperDiv.id = 'wrapper';
var wrapDiv = document.createElement('div');
wrapDiv.className = 'wrap';
var projectsH3 = document.createElement('h3');
projectsH3.textContent = 'PROJECTS';
var webdevA = document.createElement('a');
webdevA.className = 'goal';
webdevA.href = 'webdev.html';
webdevA.textContent = 'Web Development';
var blogsA = document.createElement('a');
blogsA.className = 'goal';
blogsA.href = 'blogs.html';
blogsA.textContent = 'Blogs';
var vidanimA = document.createElement('a');
vidanimA.className = 'goal';
vidanimA.href = 'vidanim.html';
vidanimA.textContent = 'Video / Animation';
var digpaintA = document.createElement('a');
digpaintA.className = 'goal';
digpaintA.href = 'digpaint.html';
digpaintA.textContent = 'Digital Painting';

// Append all elements to the document body
wrapDiv.appendChild(projectsH3);
wrapDiv.appendChild(webdevA);
wrapDiv.appendChild(blogsA);
wrapDiv.appendChild(vidanimA);
wrapDiv.appendChild(digpaintA);
wrapperDiv.appendChild(wrapDiv);
document.body.appendChild(logoLink);
document.body.appendChild(wrapperDiv);