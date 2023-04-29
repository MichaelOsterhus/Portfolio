const itemsArr = [
    {
        header: 'Four Element Creations Photo-Editor',
        url: '#',
        tracker: 7,
        tracked: 4,    
    }, 
    {
        header: 'Four Element Creations Tutorials',
        url: '#',
        tracker: 7,
        tracked: 2,    
    },
    {
        header: 'Computing Fundamentals 1',
        url: '#',
        tracker: 7,
        tracked: 5,    
    },
    {
        header: 'Network and Sec Foundation',
        url: '#',
        tracker: 5,
        tracked: 3,    
    },
    {
        header: 'Info Sys Business Concepts',
        url: '#',
        tracker: 0,
        tracked: null,
        source: '',
    },
    {
        header: 'Intro To Statistics For Data Science',
        url: 'https://www.youtube.com/watch?v=Vfo5le26IhY&list=PLlgLmuG_KgbaXMKcISC-fdz7HUn1oKr9i',
        tracker: 0,
        tracked: null,
        source: 'Great Learning -- YouTube'
    },
    {
        header: 'Intro To Data Science In Python',
        url: 'https://www.coursera.org/learn/python-data-analysis/home/week/1',
        tracker: 0,
        tracked: null,
        source: 'Coursera'
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
        header: 'Complete JavaScript',
        url: 'https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648181?start=15',
        tracker: 0,
        tracked: null,
        source: 'Udemy'
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
    const container = document.createElement('div')
    container.classList.add('container')
    const header = document.createElement('h1')
    header.textContent = displayObj.header
    const link = document.createElement('a')
    link.href = displayObj.url
    link.textContent = displayObj.source
    container.appendChild(header)
    container.appendChild(link)
    console.log(displayObj.tracker)
    for (i = 0; i < displayObj.tracker; i++) {
        const tracker = document.createElement('div')
        tracker.classList.add('tracker')
        container.appendChild(tracker)
    }

    display.appendChild(container)
    const tracked = container.querySelectorAll('.tracker')
    console.log('first tracked', tracked)
    for (i = 0; i < displayObj.tracked; i++) {
        tracked[i].style.backgroundColor = '#00ff33'
        console.log('tracked', tracked[i])
    }
    });
})

