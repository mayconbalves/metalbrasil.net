import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Aside from '../../src/Components/Aside'
import style from './page.module.css'

export async function getStaticPaths() {
  try {
    const files = fs.readdirSync('public/posts/thrash-metal')

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
      `public/posts/thrash-metal/${slug}.md`,
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
    <div className={style.post_container}>
      <div className={`${style.post_description} ml-6 my-10 dark:bg-black bg-white`}>
        <h1 className="p-10">{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>

      <div className={`${style.post_aside} mr-6 my-10 dark:bg-black bg-white`}>
        <Aside />
      </div>
    </div>
  )
}

export default Post
