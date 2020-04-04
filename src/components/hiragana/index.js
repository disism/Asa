import React, { useEffect, useReducer, useRef, useState } from "react"
import axios from "axios"
import "./style.scss"
import Message from "../message"
import { APP_ID, baseUrl } from "../../api/config"
import Reducer from "../reducer"
import InitialState from "../state"

const KanaDataRequire = () => {
  const [kanji, setKanji] = useState('漢字')
  const [ChangeKanjiValue, setChangeKanjiValue] = useState('漢字')
  const inputRef = useRef(null)
  const [state, dispatch] = useReducer(Reducer, InitialState)

  useEffect( () => {
    inputRef.current.focus()
    dispatch({ type: 'LOADING_TRUE' })
    axios.post(`${baseUrl}/hiragana`, {
      "app_id": APP_ID,
      "request_id":"record003",
      "sentence": `${ChangeKanjiValue}`,
      "output_type":"hiragana",
    })
      .then(res => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR' })
      })
  },[ChangeKanjiValue])

  const handleClick = () => {
    setChangeKanjiValue(kanji)
  }
  const handleClickCleanInput = () => {
    inputRef.current.value = ''
  }
  const hiraganaData = state.data

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


        <div style={{margin: `0.3rem 0`}}>输出结果</div>
        {state.isLoading ? <div className="loading"> 少々お待ちくださいませ... </div> :
          <section className="hiragana-out-put">
            {hiraganaData.converted}
            {state.error}
          </section>
        }
      </section>
    </>
  )
}

export default KanaDataRequire