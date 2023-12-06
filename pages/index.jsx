import Link from 'next/link'
import Navbar from 'src/Components/Navbar'

function HomePage() {
  return (
    <div style={{ height: '100vh' }}>
      <Navbar />
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: 'calc(100% - 80px)',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <div>
          <h1 style={{ fontSize: '3rem' }}>Em construção...</h1>
        </div>
        <div>
          <p style={{ textAlign: 'right' }}>
            Por enquanto, leia nossas{' '}
            <Link style={{ color: 'red' }} href="/noticias">
              notícias
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
