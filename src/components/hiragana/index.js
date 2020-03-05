import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
import "./style.scss"
import { useClipboard } from 'use-clipboard-copy';

const apiUrl = 'https://labs.goo.ne.jp/api/hiragana'
const app_id = process.env.GOO_API_APP_ID

const KanaDataRequire = () => {
  const [hiraganadata, setHiraganaData] = useState({})
  const [kanji, setKanji] = useState('漢字')
  const [kanjiFromButtonClick, setkanjiFromButtonClick] = useState('漢字')
  const [isLoading, setIsLoading] = useState(true)

  const clipboard = useClipboard({
    copiedTimeout: 600, // timeout duration in milliseconds
  });

  const inputRef = useRef(null)

  useEffect( () => {
    inputRef.current.focus()
    axios.post(apiUrl, {
      "app_id": app_id,
      "request_id":"record003",
      "sentence": `${kanjiFromButtonClick}`,
      "output_type":"hiragana",
    })
      .then(res => {
        setIsLoading(false)
        setHiraganaData(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  },[kanjiFromButtonClick])


  const handleClick = () => {
    setkanjiFromButtonClick(kanji)
  }
  const handleClickCleanInput = () => {
    inputRef.current.value = ''
  }
  return (
    <>
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
        {isLoading ? <div className="loading"> 少々お待ちくださいませ... </div> :<section className="hiragana-out-put">
          <input ref={clipboard.target} value={hiraganadata.converted || ''} readOnly />
        </section>}

      </section>
    </>
  )
}

export default KanaDataRequire