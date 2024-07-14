const menuContent = `<a href="index.html">
<div class="logo">
   <img src="img/4EC_logo32.png"/>
<h1>Michael Osterhus</h1>
</div>
</a>

<div id="wrapper"> 
<div class="wrap">

   <h3>PROJECTS</h3>
   <a class="goal" href="webdev/webdev.html">Coding Projects</a>
   <a class="goal" href="blogs.html">Blogs</a>
   <a class="goal" href="vidanim.html">Video / Animation</a>
   <a class="goal" href="digpaint.html">Digital Painting</a>   
   

</div>

</div>`

const bodyElement = document.querySelector('body');
bodyElement.insertAdjacentHTML('afterbegin', menuContent);