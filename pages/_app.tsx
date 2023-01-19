import type { AppType } from "next/app";
import "@/styles/globals.scss";
import "@/components/footer/footer.scss";
import "@/styles/variables.scss";

const App: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
