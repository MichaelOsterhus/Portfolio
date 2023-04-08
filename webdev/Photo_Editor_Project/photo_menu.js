const menuContent = `<a href="../../../index.html">
<div class="logo">
   <img src="../../../img/4EC_logo32.png"/>
<h1>Michael Osterhus</h1>
</div>
</a>

<div id="wrapper"> 
<div class="wrap">

   <a href="../index.html"><h3>PHOTO EDITOR PROJECTS</h3></a>
   <a class="goal" href="../bitmap/bitmap.html">Bitmap Presentation</a>
   <a class="goal" href="../getImageData/getImageData.html">Using JavaScript getImageData Method</a>
   <a class="goal" href="../nightSky/nightSky.html">Random Night Sky Generator</a>
   <a class="goal" href="../rgb2hsv/rgb2hsv.html">Relationship Between RGB and HSV</a>         

</div>

</div>`

const bodyElement = document.querySelector('body');
bodyElement.insertAdjacentHTML('afterbegin', menuContent);