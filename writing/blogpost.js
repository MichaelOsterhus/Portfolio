const blogs = [
    {
        url: 'RedWhite_VenusAdonis',
        title: "Red + White: Surveying Alchemical Symbolism in Shakespeare's Venus and Adonis",
    },
    {
        url: 'Remembrance',
        title: "Remembrance: An Analysis of Game of Thrones",
    }
]


blogs.forEach((blog) => {
    const blogPosts = document.getElementById('blogs')
    const html = `<a target="_blank" href='blogs/${blog.url}/index.html'>
                  <div class="post"><h2>${blog.title}</h2>
                  <img src="blogs/${blog.url}/blogpic.png"></div></a>`
    blogPosts.insertAdjacentHTML('beforeend', html)
})
