import 'bootstrap/dist/css/bootstrap.min.css'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import 'nextra-theme-blog/style.css'
import GlobalStyle from 'styles/global'
import AdBanner from '../src/Components/AdBanner'

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
        <GlobalStyle />
        <DefaultSeo
          title="MetalBrasil.Net Rock and Roll, Heavy Metal e muito metal"
          description="metalbrasil.Net é um site colaborativo sobre Rock, Heavy Metal e todo tipo de metal. O conteúdo do Website é dedica para as pessoas que gostam de agitar o cabelo e balançar a cabeça com o bom e velho rock n roll."
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://www.metalbrasil.net/heavy-metal/',
            siteName: 'metal brasil'
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image'
          }}
        />
        <Component {...pageProps} />
      </ThemeProvider>
      <AdBanner data-ad-slot="7434970023" data-full-width-responsive="true" />
    </>
  )
}
