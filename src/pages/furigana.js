import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import axios from "axios"

function Furigana() {

  const handleRequireData = () => {
    axios.get('https://jlp.yahooapis.jp/FuriganaService/V1/furigana?appid=dj00aiZpPU1lRWRWOVZJMG1wTiZzPWNvbnN1bWVyc2VjcmV0Jng9ZTI-&grade=1&sentence=%e6%bc%a2%e5%ad%97%e3%81%8b%e3%81%aa%e4%ba%a4%e3%81%98%e3%82%8a%e6%96%87%e3%81%ab%e3%81%b5%e3%82%8a%e3%81%8c%e3%81%aa%e3%82%92%e6%8c%af%e3%82%8b%e3%81%93%e3%81%a8%e3%80%82',{
      
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <Layout>
      <SEO title="Furigana" />
      <h1>Furigana</h1>
      <button onClick={handleRequireData}>RequireData</button>
    </Layout>
  )
}
export default Furigana