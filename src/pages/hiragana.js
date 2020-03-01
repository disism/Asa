import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import KanaDataRequire from "../components/hiragana"

function Hiragana() {
  return (
    <Layout>
      <SEO title="Hiragana" />
      <KanaDataRequire />
    </Layout>
  )
}

export default Hiragana

