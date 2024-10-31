links = [
    {
        title: 'Introduction',
        url: '#intro'
    },
    {
        title: 'Overview of Alchemy',
        url: '#alchemy-overview'
    },
    {
        title: 'Red and White in Other Contexts',
        url: '#other-contexts'
    },
    {
        title: 'Searching out the Root of the Red King and White Queen',
        url: '#root'
    },
    {
        title: 'Shakespeares Inspiration',
        url: '#inspiration'
    },
    {
        title: 'Analysis of the Poem',
        url: '#analysis'
    }
]

links.forEach((link) => {
    const page = document.getElementById('menu')
    const a = document.createElement('a')
    const header = document.createElement('h3')
    a.href = link.url
    header.textContent = link.title
    a.appendChild(header)
    page.appendChild(a)
})