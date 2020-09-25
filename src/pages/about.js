import React from "react"
import Layout from "../components/layout"
import Clickme, { click } from "./clickme"

export default function About() {

  return (
      <Layout>
            

            <div>About me { click() }</div>

            <img src="img/roger.jpeg" alt="Roger Dickey" className="img-thumbnail" />

            <Clickme/>


      </Layout>
  )
}
