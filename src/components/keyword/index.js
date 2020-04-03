import React, { useEffect, useReducer, useRef, useState } from "react"
import axios from "axios"

import "./style.scss"
import Message from "../message"
import { APP_ID, baseUrl } from "../../api/config"

const initialState = {
  data: { keyword: [] },
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
        data: [],
        error: '問題が発生したためデータリクエストを終了します！'
      }
    default:
      return state
  }
}

function KeywordRequireData() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const [keywordTitleChange, setKeywordTitleChange] = useState('宮沢賢治『銀河鉄道の夜』')
  const [keywordTitleValue, setKeywordTitleValue] = useState('宮沢賢治『銀河鉄道の夜』')

  const [keywordBodyChange, setKeywordBodyChange] = useState('主人公のジョバンニは貧しい学生')
  const [keywordBodyValue, setKeywordBodyValue] = useState('主人公のジョバンニは貧しい学生')

  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    setIsLoading(true)
    inputRef.current.focus()
    axios.post(`${baseUrl}/keyword`, {
      "app_id": APP_ID,
      "request_id":"record006",
      "title": `${keywordTitleValue}`,
      "body": `${keywordBodyValue}`,
    })
      .then(res => {
        setIsLoading(false)
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch(err => {
        setIsLoading(false)
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
      <div style={{marginBottom: `0.3rem`}}>关键词输出</div>
      {isLoading ? <div className="loading"> 少々お待ちくださいませ... </div> :<div className="keyword-output">
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
    </>
  )
}

export default KeywordRequireData