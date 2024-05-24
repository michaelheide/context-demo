import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  // probably the best place for your context ;)
  return <Component {...pageProps} />;
}
