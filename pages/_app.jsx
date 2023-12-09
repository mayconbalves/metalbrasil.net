import { Analytics } from '@vercel/analytics/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import 'nextra-theme-blog/style.css'
import AdBanner from '../src/Components/AdBanner'
import '../styles/base.css'
import '../styles/reset.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Metal Brasil</title>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
      <AdBanner data-ad-slot="7434970023" data-full-width-responsive="true" />
    </>
  )
}
