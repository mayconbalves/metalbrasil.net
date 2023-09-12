import fs from 'fs'
import matter from 'gray-matter'
import playListContent from '../content/playlist.json'
import Card from '../src/Components/Card'
import MainCard from '../src/Components/MainCard'
import Hero from '../src/Components/Hero'
import PlayListSection from '../src/Sections/Playlist'
import RecomendPostsSection from '../src/Sections/RecomendedPosts'

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

function HomePage({ posts }) {
  return (
    <>
      <Hero />
      <div className="main_wrapper">
        <div>
          <MainCard
            author="Maycon B. Alves"
            avatarImage="https://cdn.pixabay.com/photo/2013/03/19/23/07/easter-bunny-95096_960_720.jpg"
            subtitle="Band description"
            title="judas Priest"
            slug="judas-priest"
            bandImage={`/images/bands/heavy-metal/judas-priest.jpeg`}
          />
        </div>
        <div className="card_grid">
          {posts.map(({ slug, frontmatter }) => (
            <Card
              key={slug}
              author="Maycon B. Alves"
              avatarImage="https://cdn.pixabay.com/photo/2013/03/19/23/07/easter-bunny-95096_960_720.jpg"
              subtitle="Band description"
              title={frontmatter.title}
              bandImage={`/${frontmatter.socialImage}`}
              slug={slug}
            />
          ))}
        </div>
      </div>
      <div className="grid__wrapper">
        <PlayListSection playListContent={playListContent} />
      </div>
      <div className="main_wrapper">
        <RecomendPostsSection />
      </div>
    </>
  )
}
export default HomePage
