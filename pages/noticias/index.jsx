import fs from 'fs'
import matter from 'gray-matter'
import Card from 'src/Components/Card'
import Navbar from 'src/Components/Navbar'

export async function getStaticProps() {
  try {
    const files = fs.readdirSync('public/posts/heavy-metal')

    const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '')
      const readFile = fs.readFileSync(
        `public/posts/heavy-metal/${fileName}`,
        'utf-8'
      )
      const { data: frontmatter } = matter(readFile)

      return {
        slug,
        frontmatter
      }
    })

    return {
      props: { posts }
    }
  } catch (error) {
    console.error(error)

    return {
      props: {}
    }
  }
}

const Noticias = ({ posts }) => {
  return (
    <>
      <Navbar />
      <div>
        <h1>Notícias</h1>
        {posts.map(({ slug, frontmatter }) => (
          <Card
            key={slug}
            author="Maycon B. Alves"
            avatarImage="https://cdn.pixabay.com/photo/2013/03/19/23/07/easter-bunny-95096_960_720.jpg"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            title={frontmatter.title}
            bandImage={`/${frontmatter.socialImage}`}
            slug={slug}
          />
        ))}
      </div>
    </>
  )
}

export default Noticias
