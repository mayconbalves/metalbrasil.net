import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  const meta = {
    title: 'Metal Brasil',
    description:
      'Website dedicado ao metal do Brasil e sobre o melhor estilo de música que existe.',
    image: 'https://mayconbalves.com.br/images/brasil-metal.png',
    url: 'https://www.metalbrasil.net/'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@metalbrasil" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta property="og:url" content={meta.url}></meta>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4370754805788508"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </Head>
      <title>Metal Brasil</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
