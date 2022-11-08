import Head from "next/head";
import App from "./_app";

export default function Root() {
  return (
    <div>
      <Head>
        <title>sk-it</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </div>
  );
}
