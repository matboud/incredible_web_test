import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "../theme/config";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import store from "../app/store";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
