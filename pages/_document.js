import Document, {Head, Main, NextScript} from 'next/document';

/**
 * MyDocument
 */
export default class MyDocument extends Document {
  /**
   * render
   * @return {*}
   */
  render() {
    return (
      <html>
      <Head>
        <link href="/static/css/bootstrap.min.css" rel="stylesheet"/>
        <script type="text/javascript" src="/static/js/jquery.min.js"/>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    );
  }
}
