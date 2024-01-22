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

  const heavyMetalPosts = await fs.readdir(path.join(__dirname, '..', 'public', 'posts', 'heavy-metal'))
  const thrashMetalPosts = await fs.readdir(path.join(__dirname, '..', 'public', 'posts', 'thrash-metal'))
  const reviewsPosts = await fs.readdir(path.join(__dirname, '..', 'public', 'posts', 'reviews'))
  const rockPosts = await fs.readdir(path.join(__dirname, '..', 'public', 'posts', 'rock'))
  const siteUrl = 'https://www.metalbrasil.net'

  await Promise.all([
    ...heavyMetalPosts.map(async (name) => {
      if (name.startsWith('index.')) return;
  
      const content = await fs.readFile(
        path.join(__dirname, '..', 'public', 'posts', 'heavy-metal', name)
      );
  
      const frontmatter = matter(content);
  
      feed.item({
        title: frontmatter.data.title,
        url: `${siteUrl}/heavy-metal/` + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        author: frontmatter.data.author,
      });
    }),
  
    ...thrashMetalPosts.map(async (name) => {
      if (name.startsWith('index.')) return;
  
      const content = await fs.readFile(
        path.join(__dirname, '..', 'public', 'posts', 'thrash-metal', name)
      );
  
      const frontmatter = matter(content);
  
      feed.item({
        title: frontmatter.data.title,
        url: `${siteUrl}/thrash-metal/` + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        author: frontmatter.data.author,
      });
    }),
  
    ...reviewsPosts.map(async (name) => {
      if (name.startsWith('index.')) return;
  
      const content = await fs.readFile(
        path.join(__dirname, '..', 'public', 'posts', 'reviews', name)
      );
  
      const frontmatter = matter(content);
  
      feed.item({
        title: frontmatter.data.title,
        url: `${siteUrl}/reviews/` + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        author: frontmatter.data.author,
      });
    }),

    ...rockPosts.map(async (name) => {
      if (name.startsWith('index.')) return;
  
      const content = await fs.readFile(
        path.join(__dirname, '..', 'public', 'posts', 'rock', name)
      );
  
      const frontmatter = matter(content);
  
      feed.item({
        title: frontmatter.data.title,
        url: `${siteUrl}/rock/` + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        author: frontmatter.data.author,
      });
    }),
  ]);

  await fs.writeFile('./public/sitemap.xml', feed.xml({ indent: true }))
}

generate()
