import React, { useEffect, useRef, useState } from "react"
import axios from "axios"

import "./style.scss"
import Message from "../message"
import { APP_ID, baseUrl } from "../../api/config"


function KeywordRequireData() {
  const [keywordData, setKeywordData] = useState({keywords:[]})

  const [keywordTitleChange, setKeywordTitleChange] = useState('宮沢賢治『銀河鉄道の夜』')
  const [keywordTitleValue, setKeywordTitleValue] = useState('宮沢賢治『銀河鉄道の夜』')

  const [keywordBodyChange, setKeywordBodyChange] = useState('主人公のジョバンニは貧しい学生')
  const [keywordBodyValue, setKeywordBodyValue] = useState('主人公のジョバンニは貧しい学生')

  const [isLoading, setIsLoading] = useState(true)
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
    axios.post(`${baseUrl}/keyword`, {
      "app_id": APP_ID,
      "request_id":"record006",
      "title": `${keywordTitleValue}`,
      "body": `${keywordBodyValue}`,
    })
      .then(res => {
        setIsLoading(false)
        setKeywordData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[keywordTitleValue, keywordBodyValue])

  // console.log(keywordData.keywords)
  const handleClick = () => {
    setKeywordTitleValue(keywordTitleChange)
    setKeywordBodyValue(keywordBodyChange)
  }

  return (
    <>
      <Message/>
      <div style={{marginBottom: `0.3rem`}}>关键词输出</div>
      {isLoading ? <div className="loading"> 少々お待ちくださいませ... </div> :<div className="keyword-output">
        {keywordData.keywords.map((item,idx) => {
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