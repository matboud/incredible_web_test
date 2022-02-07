import { randomBytes } from "crypto";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

// @typescript-eslint/no-unused-vars
declare let __webpack_nonce__: any;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const nonce = randomBytes(16).toString("base64");
    const originalRenderPage = ctx.renderPage;

    __webpack_nonce__ = nonce; // eslint-disable-line @typescript-eslint/no-unused-vars

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (pageProps) =>
            sheet.collectStyles(<App {...pageProps} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        nonce,
        styles: (
          <>
            {initialProps.styles}
            <style nonce={nonce}>{sheet.instance.toString()}</style>
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { nonce } = this.props as any;
    return (
      <Html lang="en">
        <Head nonce={nonce}>
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
