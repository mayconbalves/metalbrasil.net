const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Brasil Metal',
    site_url: 'https://mayconbalves.com.br/',
    feed_url: 'https://mayconbalves.com.br/feed.xml'
  })

  const heavyMetalPosts = await fs.readdir(path.join(__dirname, '..', 'public', 'posts', 'heavy-metal'))
  const thrashMetalPosts = await fs.readdir(path.join(__dirname, '..', 'public', 'posts', 'thrash-metal'))
  const siteUrl = 'https://mayconbalves.com.br'

  await Promise.all(
    heavyMetalPosts.map(async (name) => {
      if (name.startsWith('index.')) return
      const content = await fs.readFile(
        path.join(__dirname, '..', 'public', 'posts', 'heavy-metal', name)
      )

      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: `${siteUrl}/heavy-metal/` + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        // categories: frontmatter.data.tag.split(', '),
        author: frontmatter.data.author
      })
    }),

    thrashMetalPosts.map(async (name) => {
      if (name.startsWith('index.')) return
      const content = await fs.readFile(
        path.join(__dirname, '..', 'public', 'posts', 'thrash-metal', name)
      )

      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: `${siteUrl}/thrash-metal/` + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        // categories: frontmatter.data.tag.split(', '),
        author: frontmatter.data.author
      })
    })
  )

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
