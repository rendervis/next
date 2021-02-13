import Layout from "../src/components/Layout"
import Link from "next/link"

const PostLink = ({title}) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

const Blog = () => {
  return (
    <Layout title="My blog">
      <ul>
        <PostLink title='react' />
        <PostLink title='angular' />
        <PostLink title='vue' />
      </ul>
    </Layout>
  )
}
export default Blog
