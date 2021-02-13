import React from "react"
import Layout from "../src/components/Layout"
import Error from "./_error"

const About = ( props ) => {
  const { pokemon, statusCode,res } = props
  console.log(res)
  if (statusCode) {
    return <Error />
  }
  return (
    <Layout title="About">
      <p>A java script program</p>
      <img src="/logo.png" alt="logo" height="200px" width="200px" />
    </Layout>
  )
}

About.getInitialProps = async ({ req, history, location, props }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)

  const statusCode = res.status > 200 ? res.status : false
  const data = await res.json()

  return { pokemon: data, statusCode, history, location, props }
}

export default About
