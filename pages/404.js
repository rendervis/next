
import Layout from '../src/components/Layout'

export default Error  = ({statusCode}) =>{
  <Layout title='Error!!' >
  {statusCode? `Could not load user data: Status code ${statusCode}`:null}
  <p>Could not get the page</p>
  </Layout>
}