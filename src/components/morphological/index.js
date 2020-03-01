import React, { useEffect, useState } from "react"
import "./style.scss"
import axios from "axios"

const apiUrl = 'https://labs.goo.ne.jp/api/morph'
const app_id = process.env.GOO_API_APP_ID
function MorphologicalDataRequire() {
  const [morpData, setMorpData] = useState([','])
  const [nprp, setNprp] = useState('text')
  const [sentValue, setSentValue] = useState('日本語を分析します')

  useEffect(() => {
    axios.post(apiUrl,{
      "app_id": app_id,
      "request_id":"record001",
      "sentence": `${sentValue}`,
    })
      .then(res => {
        setMorpData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[sentValue])

  const handleClick = () => {
    setSentValue(nprp)
  }
  console.log(morpData.word_list)
  return (
    <>
      {morpData.word_list}
      <br/>
      <textarea
        type="text"
        value={nprp}
        onChange={e => setNprp(e.target.value)}
      />
      <button type="button" onClick={handleClick}>提交</button>
    </>
  )
}

export default MorphologicalDataRequire