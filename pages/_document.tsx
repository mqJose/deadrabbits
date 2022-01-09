import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__
    const dir = locale === 'es' ? 'es' : 'en_US'
    return (
      <Html lang="en" dir={dir}>
        <Head>
          <link rel="icon" href="/favicon.ico" type="image/png" />
          <meta name="description" content="Dead Rabbits is a community for helping to developers and showing technology news" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument