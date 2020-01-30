import Head from 'next/head'
import "../styles/styles.css";


// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BudgetVisualizer - What all can be done with this kind of money</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}