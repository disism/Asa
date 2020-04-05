import React, { useEffect, useReducer, useState } from "react"
import axios from "axios"
import reducer from "./store/reducer"
import InitialState from "./store/state"

function KanjiComponent() {
  const [state, dispatch] = useReducer(reducer, InitialState)
  const [kanjiValue, setKanjiValue] = useState('猫')
  const [kanjiChangeValue, setKanjiChangeValue] = useState('猫')

  const fetchWords = (kanjiValue) => {
    axios.get(`https://kanjiapi.dev/v1/words/${kanjiValue}`)
      .then(wirds_res => {
        dispatch({ type: 'WORDS_FETCH_SUCCESS', payload: wirds_res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  const fetchKanji = (kanjiValue) => {
    axios.get(`https://kanjiapi.dev/v1/kanji/${kanjiValue}`)
      .then(kanji_res => {
        dispatch({ type: 'KANJI_FETCH_SUCCESS', payload: kanji_res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect( () => {
    const fetchAllData = async (kanjiValue) => {
      await fetchKanji(kanjiValue)
      await fetchWords(kanjiValue)
    }
    fetchAllData(kanjiValue)
  },[kanjiValue])



  console.log(state.words_data)
  const WordsResult = state.words_data

  console.log(state.kanji_data)
  const KanjiData = state.kanji_data

  const handleInput = (e) => {
    e.preventDefault()
    setKanjiValue(kanjiChangeValue)
  }
  return (
    <>
      <h1>Kanji</h1>
      <form onSubmit={handleInput}>
        <input
          type="text"
          value={kanjiChangeValue}
          onChange={e => setKanjiChangeValue(e.target.value)}
        />
        <button type="submit">Require</button>
      </form>

      <h1>
        {KanjiData &&
        <section>
          {KanjiData.kanji},
          {KanjiData.kun_readings},
          {KanjiData.heisig_en},
          {KanjiData.on_readings}
        </section>}
      </h1>

      {WordsResult && WordsResult.map((items) => {
        return items.variants.map((item, idx) => {
          return (
            <section key={idx}>
              <div>{item.written}, {item.pronounced}</div>
            </section>
          )
        })
      })}

    </>
  )
}

export default KanjiComponent