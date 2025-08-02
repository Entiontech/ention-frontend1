import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/bot.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        {/* Preload critical fonts */}
        <link rel="preload" href="https://fonts.googleapis.com/icon?family=Material+Icons" as="style" />
        {/* Preload above-the-fold images */}
        <link rel="preload" as="image" href="/assets/landing_page/e5.webp" />
        <link rel="preload" as="image" href="/assets/landing_page/e4.webp" />
        {/* Preload hero video if any */}
        {/* <link rel="preload" as="video" href="/assets/landing_page/hero-video.mp4" type="video/mp4" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
