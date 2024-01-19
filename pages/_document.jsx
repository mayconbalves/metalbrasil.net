import Document, { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    const meta = {
      title:
        'MetalBrasil.Net Rock and Roll, Heavy Metal e todo tipo do mais verdadeiro metal',
      description:
        'metalbrasil.Net é um site colaborativo sobre Rock, Heavy Metal e todo tipo de metal. O conteúdo do Website é dedica para as pessoas que gostam de agitar o cabelo e balançar a cabeça com o bom e velho rock n roll.',
      image: 'https://www.metalbrasil.net/images/brasil-metal.png',
      url: 'https://www.metalbrasil.net'
    }

    return (
      <Html lang="pt-br">
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
          <meta
            name="google-site-verification"
            content="3aPUSumKVURK7bht5GRgeZ8x9T7ce4guRMRMbP95XQs"
          />
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4370754805788508"
            strategy="lazyOnload"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.cdnfonts.com/css/metal-mania"
            rel="stylesheet"
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
}
