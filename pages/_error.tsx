import Layout from "../src/components/Layout"

type Props = Readonly<{
  statusCode: string
}>

const Error = ({ statusCode }: Props): JSX.Element => (
  <Layout title="Error!!">
    {statusCode ? `Could not load user data: Status code ${statusCode}` : null}
    <p>Could not get the page</p>
  </Layout>
)

export default Error
