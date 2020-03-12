import React, { useEffect, useRef, useState } from "react"
import "./style.scss"
import axios from "axios"
import Message from "../message"
import { APP_ID, baseUrl } from "../../api/config"

function MorphologicalDataRequire() {
  const [morpData, setMorpData] = useState([])
  const [nprp, setNprp] = useState('日本語を分析します')
  const [sentValue, setSentValue] = useState('日本語を分析します')
  const textRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    textRef.current.focus()
    axios.post(`${baseUrl}/morph`,{
      "app_id": APP_ID,
      "request_id":"record001",
      "sentence": `${sentValue}`,
    })
      .then(res => {
        setIsLoading(false)
        setMorpData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[sentValue])

  const handleClick = () => {
    setSentValue(nprp)
  }

  const norpRes = morpData.word_list
  console.log(norpRes)

  return (
    <>
      <Message/>
      <div>输入文本</div>
      <div className="input-box">
        <textarea
          ref={textRef}
          type="text"
          value={nprp}
          onChange={e => setNprp(e.target.value)}
        />
        <button type="button" onClick={handleClick}>提交</button>
      </div>
      <div>解析输出</div>
      {isLoading ? <div className="loading"> 少々お待ちくださいませ... </div> :<div className="norp-output">
        <table>
          <thead>
          <tr>
            <td>形態素</td>
            <td>品詞名</td>
            <td>片仮名</td>
          </tr>
          </thead>
        {norpRes && norpRes.map(items => {
          return items.map((item, idx) => {
            return (

                <tbody
                  key={idx}
                >
                  <tr>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                  </tr>
                </tbody>

            )
          })
        })}
        </table>
      </div>}
    </>
  )
}

export default MorphologicalDataRequire