import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import "./style.scss"
import { useClipboard } from 'use-clipboard-copy';
import Message from "../message"
import { APP_ID, baseUrl } from "../../api/config"

const KanaDataRequire = () => {
  const [fetchHiraganaData, setFetchHiraganaData] = useState({})
  const [kanji, setKanji] = useState('漢字')
  const [ChangeKanjiValue, setChangeKanjiValue] = useState('漢字')
  const [isLoading, setIsLoading] = useState(true)

  const clipboard = useClipboard({
    copiedTimeout: 600, // timeout duration in milliseconds
  });

  const inputRef = useRef(null)

  useEffect( () => {
    inputRef.current.focus()
    axios.post(`${baseUrl}/hiragana`, {
      "app_id": APP_ID,
      "request_id":"record003",
      "sentence": `${ChangeKanjiValue}`,
      "output_type":"hiragana",
    })
      .then(res => {
        setIsLoading(false)
        setFetchHiraganaData(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  },[ChangeKanjiValue])

  const handleClick = () => {
    setChangeKanjiValue(kanji)
  }
  const handleClickCleanInput = () => {
    inputRef.current.value = ''
  }
  return (
    <>
      <Message/>
      <div style={{marginBottom: `0.3rem`}}>输入汉字</div>
      <section className="conversion-block">
        <section className="textarea">
          <textarea
            ref={inputRef}
            type="text"
            value={kanji}
            onChange={e => setKanji(e.target.value)}
          />
        </section>

        <button type="button" onClick={handleClick}>转换</button>
        <button type="button" onClick={handleClickCleanInput}>清除输入框</button>

        <button onClick={clipboard.copy}>
          {clipboard.copied ? '复制成功' : '复制输出的内容'}
        </button>

        <div style={{margin: `0.3rem 0`}}>输出结果</div>
        {isLoading ? <div className="loading"> 少々お待ちくださいませ... </div> : <section className="hiragana-out-put">
          <textarea ref={clipboard.target} value={fetchHiraganaData.converted || ''} readOnly />
        </section>}

      </section>
    </>
  )
}

export default KanaDataRequire