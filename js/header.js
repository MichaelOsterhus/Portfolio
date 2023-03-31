
// Create link elements for the CSS files
var css1 = document.createElement('link');
css1.rel = 'stylesheet';
css1.href = 'css/homestyle.css';

var css2 = document.createElement('link');
css2.rel = 'stylesheet';
css2.href = 'css/bootstrap.min.css';

// Create link elements for the icon files
var icon1 = document.createElement('link');
icon1.rel = 'apple-touch-icon';
icon1.sizes = '180x180';
icon1.href = 'img/apple-touch-icon.png';

var icon2 = document.createElement('link');
icon2.rel = 'icon';
icon2.type = 'image/png';
icon2.sizes = '32x32';
icon2.href = 'img/favicon-32x32.png';

var icon3 = document.createElement('link');
icon3.rel = 'icon';
icon3.type = 'image/png';
icon3.sizes = '16x16';
icon3.href = 'img/favicon-16x16.png';

var manifest = document.createElement('link');
manifest.rel = 'manifest';
manifest.href = 'img/site.webmanifest';

// Create a script element for the Bootstrap JS file
var script = document.createElement('script');
script.src = 'js/bootstrap.min.js';

// Append all elements to the head section of the document
document.head.appendChild(css1);
document.head.appendChild(css2);
document.head.appendChild(icon1);
document.head.appendChild(icon2);
document.head.appendChild(icon3);
document.head.appendChild(manifest);
document.head.appendChild(script);