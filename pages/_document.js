import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name='description' content='Informacion sobre adiestramiento canino y las distintas razas' />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
      <link href="https://fonts.googleapis.com/css2?family=Covered+By+Your+Grace&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href='https://necolas.github.io/normalize.css/8.0.1/normalize.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
