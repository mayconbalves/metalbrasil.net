import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Footer from 'src/Components/Footer'
import GridNews from 'src/Components/GridNews'
import Navbar from 'src/Components/Navbar'

export async function getStaticPaths() {
  try {
    const files = fs.readdirSync('public/posts/reviews')

    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace('.md', '')
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
    const fileName = fs.readFileSync(
      `public/posts/reviews/${slug}.mdx`,
      'utf-8'
    )
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
