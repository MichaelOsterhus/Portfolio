links = [
    {
        title: 'Introduction',
        url: 'index.html'
    },
    {
        title: 'Searching out the Root of the Red King and White Queen',
        url: 'root.html'
    },
    {
        title: 'Shakespeares Inspiration',
        url: 'inspiration.html'
    },
    {
        title: 'Analysis',
        url: 'analysis.html'
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