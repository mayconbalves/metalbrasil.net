import Head from 'next/head'
import type { NextraThemeLayoutProps } from 'nextra'

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
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
