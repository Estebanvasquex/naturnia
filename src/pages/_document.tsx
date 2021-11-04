import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

type MyState = { styleTags: any[] };
class MyDocument extends Document<MyState> {
    static async getInitialProps({ renderPage }: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(
            (App) => (props) => sheet.collectStyles(<App {...props} />)
        );

        //This code is necessary to avoid FOUC issues with styled-components
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <Html lang='es'>
                <Head>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Livvic&display=swap'
                        rel='stylesheet'
                    />
                    { this.props.styleTags }
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
