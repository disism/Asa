import React, { useEffect, useRef, useState } from "react"
import "./style.scss"
import axios from "axios"
import Message from "../message"
import { APP_ID, baseUrl } from "../../api/config"


function ChronoDataRequire() {
  const [chronoData, setChronoData] = useState({chronoData: []})
  const [textChangeValue, setChangeTextValue] = useState('今日の10時半に出かけます。')
  const [resState, setResState] = useState('今日の10時半に出かけます。')
  const [isLoading, setIsLoading] = useState(true)

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    axios.post(`${baseUrl}/chrono`,{
      "app_id": APP_ID,
      "request_id":"record007",
      "sentence": `${resState}`,
    })
      .then(res => {
        setIsLoading(false)
        setChronoData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[resState])

  const handleChangeClick = ()=> {
    setResState(textChangeValue)
  }
  const dataRes = chronoData.datetime_list

  return (
    <>
      <Message/>
      <div>结果输出</div>
      {isLoading ? <div className="loading"> 少々お待ちくださいませ... </div> : <div className="chrono-output">
        {dataRes && dataRes.map((item, idx) => {
            return (
              <div key={idx}>
                <div className="chrono-output-list">
                  <div className="input-date">{item[0]}</div>
                  <div className="output-date">{item[1]}</div>
                </div>
              </div>
            )
        })}

      </div>}
      <div style={{marginBottom: `0.3rem`}}>文本输入</div>
      <div className="chr-input">
        <textarea
          ref={inputRef}
          type="text"
          value={textChangeValue}
          onChange={e => setChangeTextValue(e.target.value)}
        />
      </div>
      <br/>
      <button type="button" onClick={handleChangeClick}>提交</button>
    </>
  )
}

export default ChronoDataRequire