import Head from 'next/head'
import "../styles/styles.css";


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>How much it will cost to do CAA/NRC</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}