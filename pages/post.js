
import Layout from '../src/components/Layout'

const Post = ({url}) =>{
  return (
    <Layout title={url.query.title}>
    <p>lorem</p>
    </Layout>
  )
}
export default Post