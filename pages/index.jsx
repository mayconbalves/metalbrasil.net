import fs from 'fs'
import matter from 'gray-matter'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'src/Components/Card'
import Caroulsel from 'src/Components/Carousel'
import Footer from 'src/Components/Footer'
import Navbar from 'src/Components/Navbar'
import ReviewSection from 'src/Sections/Review'
import { GridCards } from '../styles/home'

import glob from 'glob'
import path from 'path'

export async function getStaticProps() {
  try {
    const postTypes = ['heavy-metal', 'thrash-metal', 'curiosidades']

    const posts = postTypes.flatMap((postType) => {
      const files = glob.sync(`public/posts/${postType}/*.mdx`)

      return files.map((filePath) => {
        const fileName = path.basename(filePath, '.mdx')
        const slug = fileName.replace('.mdx', '')

        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const { data: frontmatter } = matter(fileContent)

        return {
          slug,
          frontmatter,
          postType
        }
      })
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
    <Container fluid>
      <Row>
        <Navbar />
      </Row>
      <Row style={{ margin: '40px 0 20px' }}>
        <Col md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
          <Caroulsel />
        </Col>
      </Row>

      <GridCards>
        {posts.map(({ slug, frontmatter, postType }) => (
          <Card
            key={slug}
            author="Maycon B. Alves"
            avatarImage="https://cdn.pixabay.com/photo/2013/03/19/23/07/easter-bunny-95096_960_720.jpg"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            title={frontmatter.title}
            bandImage={`/${frontmatter.image}`}
            slug={slug}
            postType={postType}
          />
        ))}
      </GridCards>

      <Row>
        <ReviewSection />
      </Row>

      <GridCards>
        {posts.map(({ slug, frontmatter, postType }) => (
          <Card
            key={slug}
            author="Maycon B. Alves"
            avatarImage="https://cdn.pixabay.com/photo/2013/03/19/23/07/easter-bunny-95096_960_720.jpg"
            subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            title={frontmatter.title}
            bandImage={`/${frontmatter.image}`}
            slug={slug}
            postType={postType}
          />
        ))}
      </GridCards>

      <Row>
        <Footer />
      </Row>
    </Container>
  )
}

export default HomePage
