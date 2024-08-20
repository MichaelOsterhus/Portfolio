matrix = document.getElementById('matrix-container')
red_stanzas = [ 1,  16,  18,  19,  20,  25,  33,  37,  46,  56,  65,  76,  83,  85,  86,  88,  91,  93,  96,  109,  111,  156,  167,  173,  179,  184,  187,  194,  197,  198]
white_stanzas = [ 26,  38,  39,  61,  95,  108,  122,  143,  149,  160,  188,  199]
red_white_stanzas = [ 2,  4,  6,  13,  58,  78,  99,  151,  195]

for (i = 1; i < 200; i++) {
    const mItem = document.createElement('div')
    mItem.textContent = i
    mItem.classList.add('matrix-item')
    // Check which array contains the current index `i` and add the corresponding class
    if (red_stanzas.includes(i)) {
        mItem.classList.add('red-stanza');
    } else if (white_stanzas.includes(i)) {
        mItem.classList.add('white-stanza');
    } else if (red_white_stanzas.includes(i)) {
        mItem.classList.add('red-white-stanza');
    }
    
    matrix.appendChild(mItem) 
}