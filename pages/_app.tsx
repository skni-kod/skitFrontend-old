import type { AppType } from "next/app";
import "@/styles/globals.scss";
import "@/styles/index.scss";
import "@/components/navbar/navbar.scss";
import "@/components/footer/footer.scss";

const App: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
