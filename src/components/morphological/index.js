import React, { useEffect, useRef, useState } from "react"
import "./style.scss"
import axios from "axios"

const apiUrl = 'https://labs.goo.ne.jp/api/morph'
const app_id = process.env.GOO_API_APP_ID
function MorphologicalDataRequire() {
  const [morpData, setMorpData] = useState([])
  const [nprp, setNprp] = useState('分析')
  const [sentValue, setSentValue] = useState('分析')
  const textRef = useRef(null)

  useEffect(() => {
    textRef.current.focus()
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

  return (
    <>
      <div className="mor-example">
        <div>例如输入：日本語を分析します</div>
        <div>日本語：名词, を：格助詞, 分析: 名詞, し：動詞活用語尾, ます：動詞接尾辞</div>
      </div>
      {morpData.word_list}
      <br/>
      <div className="input-box">
        <textarea
          ref={textRef}
          type="text"
          value={nprp}
          onChange={e => setNprp(e.target.value)}
        />
        <button type="button" onClick={handleClick}>提交</button>
      </div>
    </>
  )
}

export default MorphologicalDataRequire