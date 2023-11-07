import axios from 'axios'
import fs from 'fs'
import matter from 'gray-matter'
import { useState } from 'react'
import playListContent from '../content/playlist.json'
import Card from '../src/Components/Card'
import Hero from '../src/Components/Hero'
import MainCard from '../src/Components/MainCard'
import PlayListSection from '../src/Sections/Playlist'

const cpfMask = (value) => {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

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
  const [value, setValue] = useState('')
  const [result, setResult] = useState({ nome: '', cpf: '' })

  const handleSubmit = async () => {
    const newValue = value.replaceAll('.', '')
    const newSetValue = newValue.replaceAll('-', '')
    axios
      .get(
        `http://api.diretrixconsultoria.com.br/Consultas/Pessoa/${newSetValue}`,
        {
          headers: {
            Authorization: 'Basic cmFmYWVsOjEwMTAxMA=='
          }
        }
      )
      .then((resp) => setResult(resp.data))
  }
  return (
    <>
      <Hero />
      <div className="main_wrapper">
        <label>Digite um CPF</label>
        <input
          type="text"
          placeholder="digite o cpf"
          value={cpfMask(value)}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>
          Buscar
        </button>
        <div>
          {result && (
            <>
              <h1>{result.nome}</h1>
              <h2>{result.cpf}</h2>
            </>
          )}
        </div>
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
              subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
    </>
  )
}

export default HomePage
