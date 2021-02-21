import Document, {
  Html,
  Head,
  Main,
  MaxScript,
  NextScript,
} from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
        <div id="map" style={{height:' 100%'}} ></div>
          <Main />
          <NextScript />
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1dk0bwHir9gIbjRoQ-666VOh5fzjGkA"></script>
          <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
        </body>
        <style global jsx>
          {`
            body {
              font-family: "Roboto", sans-serif;
            }
          `}
        </style>
      </Html>
    )
  }
}
