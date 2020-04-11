import React, { useEffect, useReducer, useRef, useState } from "react"
import axios from "axios"

import "./style.scss"
import Message from "../message"
import { APP_ID, baseUrl } from "../../api/config"
import Reducer from "../reducer"
import InitialState from "../state"
import Loading from "../loading"

function KeywordRequireData() {
  const [state, dispatch] = useReducer(Reducer, InitialState)

  const [keywordTitleChange, setKeywordTitleChange] = useState('宮沢賢治『銀河鉄道の夜』')
  const [keywordTitleValue, setKeywordTitleValue] = useState('宮沢賢治『銀河鉄道の夜』')
  const [keywordBodyChange, setKeywordBodyChange] = useState('主人公のジョバンニは貧しい学生')
  const [keywordBodyValue, setKeywordBodyValue] = useState('主人公のジョバンニは貧しい学生')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    dispatch({ type: 'LOADING_TRUE' })
    axios.post(`${baseUrl}/keyword`, {
      "app_id": APP_ID,
      "request_id":"record006",
      "title": `${keywordTitleValue}`,
      "body": `${keywordBodyValue}`,
    })
      .then(res => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch(err => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  },[keywordTitleValue, keywordBodyValue])


  const handleClick = () => {
    setKeywordTitleValue(keywordTitleChange)
    setKeywordBodyValue(keywordBodyChange)
  }
  const keywordData = state.data
  return (
    <>
      <Message/>
      <div className="keyword">
        <div>标题</div>
        <input
          ref={inputRef}
          type="text"
          value={keywordTitleChange}
          onChange={e => setKeywordTitleChange(e.target.value)}
        />
        <div>内容</div>
        <textarea
          type="text"
          value={keywordBodyChange}
          onChange={e => setKeywordBodyChange(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleClick}>提交</button>
      <div style={{marginBottom: `0.3rem`}}>关键词输出</div>
      {state.isLoading ? <Loading /> :<div className="keyword-output">
        {keywordData.keywords && keywordData.keywords.map((item,idx) => {
          return (
            <div
              className="keyword-output-body"
              key={idx}
            >
              <div>{Object.keys(item)}</div> :
              <div className="keyword-number">{Object.values(item)}</div>
            </div>
          )
        })}
        <h1>{state.error}</h1>
      </div>}
    </>
  )
}

export default KeywordRequireData