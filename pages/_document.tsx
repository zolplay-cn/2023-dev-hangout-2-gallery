import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="查看现场照片——2023佐玩首届加场开发者交流会"
          />
          <meta property="og:site_name" content="hangout-21-pics.zolplay.com" />
          <meta
            property="og:description"
            content="查看现场照片——2023佐玩首届加场开发者交流会"
          />
          <meta property="og:title" content="2023佐玩首届加场开发者交流会现场照片" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="2023佐玩首届加场开发者交流会现场照片" />
          <meta
            name="twitter:description"
            content="查看现场照片——2023佐玩首届加场开发者交流会"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
