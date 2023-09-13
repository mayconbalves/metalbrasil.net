import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Aside from '../../src/Components/Aside'
import style from './page.module.css'

export async function getStaticPaths() {
  try {
    const files = fs.readdirSync('public/posts/heavy-metal')

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
      `public/posts/heavy-metal/${slug}.md`,
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
    <div className="grid__wrapper">
      <div className={`${style.post_description} dark:bg-black bg-white`}>
        <h1 className="p-8 text-center text-5xl">{frontmatter.title}</h1>
        <div className="pb-8" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </div>
  )
}

export default Post
