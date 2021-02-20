import Link from "next/link"
import Layout from "../src/components/Layout"
import {User} from "../src/components/User"
import {Company} from "../src/components/Company"

const Index = () => {
  const user = new User()
  const company = new Company()
  console.log(user)
  return (
    <Layout title="the home">
      <Link href="/about">
        <a>go to about</a>
      </Link>
      <h1>Hello</h1>
    </Layout>
  )
}

export default Index
