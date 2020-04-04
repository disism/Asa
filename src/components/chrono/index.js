import React, { useEffect, useReducer, useRef, useState } from "react"
import "./style.scss"
import axios from "axios"
import Message from "../message"
import { APP_ID, baseUrl } from "../../api/config"
import Reducer from "../reducer"
import InitialState from "../state"


function ChronoDataRequire() {
  const [state, dispatch] = useReducer(Reducer, InitialState)

  const [textChangeValue, setChangeTextValue] = useState('今日の10時半に出かけます。')
  const [resState, setResState] = useState('今日の10時半に出かけます。')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    dispatch({ type: 'LOADING_TRUE' })
    axios.post(`${baseUrl}/chrono`,{
      "app_id": APP_ID,
      "request_id":"record007",
      "sentence": `${resState}`,
    })
      .then(res => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch(err => {
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
      <div style={{marginBottom: `0.3rem`}}>文本输入</div>
      <div className="chr-input">
        <textarea
          ref={inputRef}
          type="text"
          value={textChangeValue}
          onChange={e => setChangeTextValue(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleChangeClick}>提交</button>
      <div>结果输出</div>
      {state.isLoading ? <div className="loading"> 少々お待ちくださいませ... </div> : <div className="chrono-output">
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
    </>
  )
}

export default ChronoDataRequire