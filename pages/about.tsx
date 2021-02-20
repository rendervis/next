import React from 'react'
import { NextPage } from 'next'
import Layout from "../src/components/Layout"
import Error from "./_error"
import axios from "axios"


type Props = {
   pokemon:{
    abilities: object[]
    forms: object[]
    stats: object[]
  }
}


const About: NextPage<Props> = (props)  => {
  const { pokemon} = props
  console.log(pokemon)

  return (
    <Layout title="About">
      <p>A java script program</p>
      <img src="/logo.png" alt="logo" height="200px" width="200px" />
    </Layout>
  )
}

const url: string = `https://pokeapi.co/api/v2/pokemon/ditto`



About.getInitialProps = ({ req, history, location, props }) => {
  let pokemon = {}
  axios.get(url)
  .then((response) => {
    pokemon = response.json()

  return { pokemon, history, location, props }
}

export default About
