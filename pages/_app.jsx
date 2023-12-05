import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import 'nextra-theme-blog/style.css'
import AdBanner from '../src/Components/AdBanner'
import styles from './styles.module.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Brasil Metal</title>
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
        <div className={styles.normal_grid}>
          <Component {...pageProps} />
          <Analytics />
        </div>
      </ThemeProvider>
      <AdBanner data-ad-slot="7434970023" data-full-width-responsive="true" />
    </>
  )
}
