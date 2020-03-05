import Head from "next/head";
import "../styles/styles.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          BudgetVisualizer - What all can be done with this huge amount of money
        </title>
        <link
          href="https://fonts.googleapis.com/css?family=Muli:400,700,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
