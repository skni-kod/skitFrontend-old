import Head from "next/head";
import App from "./_app";

export default function Home() {
  return (
    <div className="root">
      <Head>
        <title>sk-it</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </div>
  );
}
