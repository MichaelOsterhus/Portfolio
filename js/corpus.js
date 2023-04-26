const itemsArr = [
    {
        header: 'Four Element Creations Photo-Editor',
        url: '#',
        tracker: 0,
        tracked: null,    
    }, 
    {
        header: 'Four Element Creations Tutorials',
        url: '#',
        tracker: 0,
        tracked: null,    
    },
    {
        header: 'Computing Fundamentals 1',
        url: '#',
        tracker: 0,
        tracked: null,    
    },
    {
        header: 'Network and Sec Foundation',
        url: '#',
        tracker: 0,
        tracked: null,    
    },
    {
        header: 'Info Sys Business Concepts',
        url: '#',
        tracker: 0,
        tracked: null,
        source: '',
    },
    {
        header: 'Intro To Engineering',
        url: 'https://www.edx.org/course/introduction-to-engineering-and-design?index=product',
        tracker: 0,
        tracked: null,
        source: 'EdX'
    },
    {
        header: 'Intro To Statistics',
        url: 'https://www.coursera.org/in-progress',
        tracker: 0,
        tracked: null,
        source: 'Coursera'
    },
    {
        header: 'Intermediate JavaScript',
        url: '#',
        tracker: 0,
        tracked: null,
        source: 'Codecademy'
    },
    {
        header: 'Intro To Statistics For Data Science',
        url: 'https://youtu.be/Vfo5le26IhY',
        tracker: 0,
        tracked: null,
        source: 'Great Learning'
    },
    {
        header: 'Complete JavaScript',
        url: 'https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648181?start=15',
        tracker: 0,
        tracked: null,
        source: 'Udemy'
    },
    {
        header: 'Intro To Data Science In Python',
        url: 'https://www.coursera.org/learn/python-data-analysis/home/week/1',
        tracker: 0,
        tracked: null,
        source: 'Coursera'
    },


    {
        header: 'CompTIA A+ Training',
        url: 'https://www.professormesser.com/free-a-plus-training/a-plus-videos/professor-messers-free-comptia-a-certification-training-course/',
        tracker: 0,
        tracked: null,
        source: 'YouTube'
    },
  
]


const items = document.querySelectorAll('.item');
items.forEach((item, index) => {
  item.id = `display-${index}`;
  item.addEventListener('click', () => {
    // Extract the number from the item's ID
    const index = Number(item.id.split('-')[1]);
    // Access the object in displaysArr at the corresponding index
    const displayObj = itemsArr[index];
    // Perform actions with the displayObj
    const display = document.getElementById('display')
    const header = document.createElement('h1')
    header.textContent = displayObj.header
    display.appendChild(header)
    });
})

