import Document, {Html, Head, Main, NextScript} from 'next/document';

/**
 * MyDocument
 */
class MyDocument extends Document {
  /**
   * getInitialProps
   * @param {Document} ctx
   * @return {Object}
   */
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  /**
   * render
   * @return {*}
   */
  render() {
    return (
      <Html>
        <Head>
          <link href="/static/css/bootstrap.min.css" rel="stylesheet"/>
          <script type="text/javascript" src="/static/js/jquery.min.js"/>
          <script type="text/javascript" src="/static/js/bootstrap.min.js"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
