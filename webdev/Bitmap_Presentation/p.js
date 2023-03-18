

let totalColor = 256 ** 3
let messages = [ 
    
`The night sky image below is a bitmap image made using JavaScript
 and the HTML canvas element.  The colors of the grid of squares meant to 
 represent pixels are a mix of randomly generated red, green, and blue
 values within certain parameters. If you refresh the page/image, you will see
 a different "night sky".`,

 `This product of code was made for illustrating how bitmap images work 
 and during the course of the presentation I will explain the code I used to build 
 it as a way of explaining bitmap.`,

 `Originally, a bitmap image, basically a grid of squares known as pixels, 
 was attributed a single bit of data per square. A bit is the smallest piece of data used by a computer.
 Typically depicted as a 0 or 1, a bit can hold two values. Thus, this one bit per pixel was used in the past
 for monochrome monitors in which each pixel on the screen was either on or off, lit or dark.`,

 `A bitmap image is not unlike the map below.  This world map is divided up into a grid which is 24 squares wide
 and 12 squares tall, equaling 288 squares in total. In comparison, this world map 
 is also a bitmap image, and as such is 600px wide by 300px tall. Meaning, for every visible square in this map, 
 there are 625 pixels.  `,
 


 `Bitmap images account for most but not all images you see
 on the internet.  Also known as raster images, they come in many file types such as
 JPEG, PNG, GIF, and BMP. An alternate to bitmap images which you might see are called 'vector' 
 images which work in a fundamentally different way, but that is for a different lesson. 
 In short, I will say that the difference in the output of each type 
 is that when you enlarge a bitmap image on a screen, at a certain point the image 
 will begin to "pixelate" whereas a vector image does not.`,
 
`Pixelation means "when a picture is enlarged on a screen or print medium to the point 
that the pixels become visible". It must be pointed out that 'pixel' can mean the smallest     
element of a bitmap image, OR the smallest unit of a lit screen, such as in a computer monitor or smartphone,
containing the elements to display an image.`,
          
`So, when a bitmap image is enlarged on a screen, the file doesn't increase in pixels, rather
 each file pixel is diplayed by more screen pixels. Both bitmap images above are displayed at a 
 width of 300 screen pixels (px)
 but both have been resized for the screen from their original file pixel dimensions of: 
 335px x 335px for the left, 24px x 24px.  This means that if the images were displayed at their original
 dimensions, the image on left would be larger and the one on right would be smaller. `,
 
 `The tiny image below is the same as the one on right above shown at it's original
    dimensions, meaning each pixel in the bitmap file grid is being displayed by one pixel of the 
    screen.`,
 
 
 

 
 `So what is a bit?`,

 `A bit is the smallest piece of data used in computer processing. A bit links 
 to computer hardware which in principle is like a light switch: it is either on or off.
 Hence a bit has two possible values usually depicted as 0 and 1. `,

 `A byte is 8 bits put together to make a single value. If a bit has 2 possible values,
 how many possible values then does a byte have? `,

 `Using JavaScript, I've defined a variable I've called 'bit' and set it equal to an array
 containing 2 values, 0 and 1.  Seeing that the next variable 'bitValue' equals 2--the 
 "length" (number of values) of the 'bit' array, and our variable 'byte' equals 8,
  then byteValue equals 2^8 or 256 possible values for a byte.`,

 `Now, I can make an array for byte like I have for bit, but I don't want to 
 type a bunch of 0s and 1s. So, I created an empty byteArray, then used a "for loop" 
 so that while the iterator 'i' is less than the value of 'byte' it will push a copy 
 of the 'bit' array into the byteArray, yielding the result below`,

 `JavaScript can generate a random number between 0 and 1`,

 `Because I'm using JavaScript to append this text to the page,
          this randomly generated number...`,
 
 `...will update
 everytime you refresh the page.`,
 
 `Using the 'byteArray' I've just made, I can create a new array I call 'randomByteArray' 
 in the same manner except I can use JavaScript's "random" method to have the computer
 randomly choose between the 0 and 1 from each "bit" in 'byteArray' before it is pushed to the new array.
 Arrays made using the push method are created dynamically and not stored in the source code.  Hence, the 
 randomly generated "byte" below will be made new everytime the page is refreshed.`,

 `Bitmap is a type of digital image, also called raster. 
It is the image type typically associated with digital photos.
There are several bitmap file types including JPEG, PNG, TIF, 
and others.`,
 
 `Now pixels in bitmap images are given 3 BYTES of data (or in some cases 4)
   one byte per color channel in the RGB color system.  In the current
   system the Red, Green, and Blue channel each have a range of 256 
   values which totals a range of ${totalColor} colors.`
 
 ]
console.log(messages.length)

 function Message (i) {
   const printDiv = document.getElementById(`p-${i}`);
  //  const linebreak = document.createElement('br');
   printDiv.textContent = messages[i];   
  //  printDiv.appendChild(newMessage);
  //  printDiv.appendChild(linebreak);
}

messages.forEach((message, i) => {
   Message(i);
 });


