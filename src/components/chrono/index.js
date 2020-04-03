import React, { useEffect, useReducer, useRef, useState } from "react"
import "./style.scss"
import axios from "axios"
import Message from "../message"
import { APP_ID, baseUrl } from "../../api/config"

const initialState = {
  data: { chronoData: []},
  error: ''
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {
        data: action.payload,
        error: ''
      }
    case 'FETCH_ERROR':
      return {
        data: {},
        error: '問題が発生したためデータリクエストを終了します！'
      }
    default:
      return state
  }
}

function ChronoDataRequire() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [textChangeValue, setChangeTextValue] = useState('今日の10時半に出かけます。')
  const [resState, setResState] = useState('今日の10時半に出かけます。')
  const [isLoading, setIsLoading] = useState(false)

  const inputRef = useRef(null)

  useEffect(() => {
    setIsLoading(true)
    inputRef.current.focus()
    axios.post(`${baseUrl}/chrono`,{
      "app_id": APP_ID,
      "request_id":"record007",
      "sentence": `${resState}`,
    })
      .then(res => {
        setIsLoading(false)
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch(err => {
        setIsLoading(false)
        dispatch({ type: 'FETCH_ERROR' })
      })
  },[resState])

  const handleChangeClick = ()=> {
    setResState(textChangeValue)
  }
  const dataRes = state.data.datetime_list

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
        <h1>{state.error}</h1>
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