import Link from "next/link"
import Layout from "../src/components/Layout"
const Index = () => (
  <Layout>
    <Link href="/about">
      <a>go to about</a>
    </Link>
    <h1>Hello</h1>
  </Layout>
)

export default Index
