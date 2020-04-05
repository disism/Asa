import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import KanjiComponent from "../components/kanji"

function Kanji() {

  return (
    <Layout>
      <SEO title="Kanji" />
      <KanjiComponent/>
    </Layout>
  )
}

export default Kanji