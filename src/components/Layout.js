import Head from "next/head"

import Link from "next/link"
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = url => {
  console.log(url)
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title }) => (
  <div>
    <Head>
      <title>Next Portfolio</title>

    </Head>
    <header>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <Link href="/hireme">
        <a>hire me</a>
      </Link>
      <Link href="/blog">
        <a>blog</a>
      </Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>footer</footer>
  </div>
)
