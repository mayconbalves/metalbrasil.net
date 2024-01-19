const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Brasil Metal',
    site_url: 'https://www.metalbrasil.net',
    feed_url: 'https://www.metalbrasil.net/sitemap.xml'
  })

  const reviewsPosts = await fs.readdir(path.join(__dirname, '..', 'public', 'posts', 'reviews'))
  const siteUrl = 'https://www.metalbrasil.net'

  await Promise.all(
    reviewsPosts.map(async (name) => {
      if (name.startsWith('index.')) return
      const content = await fs.readFile(
        path.join(__dirname, '..', 'public', 'posts', 'reviews', name)
      )

      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: `${siteUrl}/reviews/` + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        author: frontmatter.data.author
      })
    })
  )

  await fs.writeFile('./public/sitemap.xml', feed.xml({ indent: true }))
}

generate()
