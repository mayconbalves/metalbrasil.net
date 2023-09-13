import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'nextra-theme-blog/style.css'
import AdBanner from '../src/Components/AdBanner'
import Footer from '../src/Components/Footer'
import Navbar from '../src/Components/Navbar'
import '../styles/globals.css'
import '../styles/main.css'
import styles from './styles.module.css'

export default function App({ Component, pageProps }: AppProps) {
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
          <Navbar />
          <Component {...pageProps} />
          <Analytics />
          <Footer />
        </div>
      </ThemeProvider>
      <AdBanner data-ad-slot="7434970023" data-full-width-responsive="true" />
    </>
  )
}
