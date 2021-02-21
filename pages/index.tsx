import Link from "next/link"
import Layout from "../src/components/Layout"
import { User } from "../src/components/User"
import { Company } from "../src/components/Company"
import {CustomMap} from '../src/components/CustomMap'

const Index = () => {
  const customMap = new CustomMap('map')
  const user = new User()
  const company = new Company()
  customMap.addUserMarker(user)
  customMap.addCompanyMarker(company)
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
