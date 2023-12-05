import Head from 'next/head'

export default function Layout({ children, pageOpts }) {
  const { title, frontMatter } = pageOpts

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:image" content={frontMatter.image} />
      </Head>
      {pageOpts.route === '/' ? (
        <main>{children}</main>
      ) : (
        <main>{children}</main>
      )}
    </>
  )
}
