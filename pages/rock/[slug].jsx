import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Footer from 'src/Components/Footer'
import GridNews from 'src/Components/GridNews'
import Navbar from 'src/Components/Navbar'

export async function getStaticPaths() {
  try {
    const files = fs.readdirSync('public/posts/rock')

    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace('.mdx', '')
      }
    }))

    return {
      paths,
      fallback: 'blocking'
    }
  } catch (error) {
    console.error(error)

    return {
      paths: [],
      fallback: false
    }
  }
}

export async function getStaticProps({ params: { slug } }) {
  try {
    const fileName = fs.readFileSync(`public/posts/rock/${slug}.mdx`, 'utf-8')
    const { data: frontmatter, content } = matter(fileName)

    return {
      props: {
        frontmatter,
        content
      }
    }
  } catch (error) {
    console.error(error)

    return {
      props: {}
    }
  }
}

function Post({ frontmatter, content }) {
  return (
    <>
      <Navbar />
      <GridNews>
        <h1>{frontmatter.title}</h1>
        <img src={frontmatter.image} alt={frontmatter.title} />
        <div
          dangerouslySetInnerHTML={{
            __html: md({ html: true }).render(content)
          }}
        />
      </GridNews>
      <Footer />
    </>
  )
}

export default Post
