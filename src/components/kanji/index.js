import React, { useEffect, useReducer, useRef, useState } from "react"
import axios from "axios"
import reducer from "./store/reducer"
import InitialState from "./store/state"
import "./style.scss"
import KanjiPagination from "./pagination"
import Loading from "../loading"

const FetchWords = ({ kanjiValue }) => {
  const [state, dispatch] = useReducer(reducer, InitialState)

   useEffect(() => {
     dispatch({ type: 'LOADING_TRUE' })
     axios.get(`https://kanjiapi.dev/v1/words/${kanjiValue}`)
       .then(wirds_res => {
         dispatch({ type: 'WORDS_FETCH_SUCCESS', payload: wirds_res.data })
       })
       .catch(err => {
         dispatch({ type: 'FETCH_ERROR' })
      })
      },[kanjiValue])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPrePage] = useState(20)

  const indexOfLastPost = currentPage * postsPrePage
  const indexOfFirstPost = indexOfLastPost - postsPrePage

  const WordsResult = state.words_data && state.words_data.slice(indexOfFirstPost, indexOfLastPost)
  console.log(WordsResult)

  const paginate = pageNumber => setCurrentPage(pageNumber)
  return (
    <>

      {state.isLoading ? <Loading/> :
      <section id="result">
        <p> 共{state.words_data && state.words_data.length} 条数据 </p>
        {WordsResult && WordsResult.map((items) => {
          return items.variants.map((variants) => {
            return items.meanings.map((meanings, idx) => {
              return (
                <section
                  className="kanji-words-section"
                  key={idx}
                >
                  <div>{variants.written} , {variants.pronounced}</div>
                  <div>{meanings.glosses[1]}</div>
                </section>
              )
            })
          })
        })}
      </section>}
      <KanjiPagination
        postPerPage={postsPrePage}
        totalPosts={state.words_data && state.words_data.length}
        paginate={paginate}
      />
      {state.error}
    </>
  )

}

const FetchKanji = ({ kanjiValue }) => {
  const [state, dispatch] = useReducer(reducer, InitialState)
  useEffect(() => {
    dispatch({ type: 'LOADING_TRUE' })
    axios.get(`https://kanjiapi.dev/v1/kanji/${kanjiValue}`)
    .then(kanji_res => {
      dispatch({ type: 'KANJI_FETCH_SUCCESS', payload: kanji_res.data })
    })
    .catch(err => {
      dispatch({ type: 'FETCH_ERROR' })
    })

  },[kanjiValue])

  const KanjiData = state.kanji_data

  return (
    <h1>
      {state.isLoading ? <Loading /> :
        <section>
        {KanjiData &&
        <div className="kanji-section">
          <div className="kanji-section-left">
            {KanjiData.kanji}
          </div>
          <div className="kanji-section-right">
            <h4>仮名：{KanjiData.kun_readings}</h4>
            <h4>笔划(Strokes)：{KanjiData.stroke_count}</h4>
            <h4>English：{KanjiData.heisig_en}</h4>
            <h4>グレード：{KanjiData.grade}</h4>
            <h4>JLPT：{KanjiData.jlpt}</h4>
            <h4>Unicode：{KanjiData.unicode}</h4>
          </div>
        </div>}
        </section>}
      {state.error}
    </h1>
  )
}

const FetchReading = ({ kanaValue }) => {
  const [state, dispatch] = useReducer(reducer, InitialState)
  useEffect(() => {
    dispatch({ type: 'LOADING_TRUE' })
    axios.get(`https://kanjiapi.dev/v1/reading/${kanaValue}`)
    .then(kana_res => {
      dispatch({ type: 'KANA_FETCH_SUCCESS', payload: kana_res.data })
    })
    .catch(err => {
      dispatch({ type: 'FETCH_ERROR' })
    })

  },[kanaValue])

  const kanaData = state.kana_data
  return (
    <>
      {state.isLoading ? <Loading /> :
      <section className="kanji-result">
        {kanaData &&
          <div>{kanaData.reading} , {kanaData.main_kanji[0]} , {kanaData.main_kanji[1]}</div>
        }
        {state.error}
      </section>}
    </>
  )
}


function KanjiComponent() {
  const [kanjiValue, setKanjiValue] = useState('猫')
  const [kanjiChangeValue, setKanjiChangeValue] = useState('猫')
  const [kana, setKana] = useState('ねこ')
  const [kanaChangeValue, setKanaChangeValue] = useState('ねこ')
  const inputFirstFocus = useRef(null)

  useEffect(() => {
    inputFirstFocus.current.focus()
  },[])
  const handleInput = (e) => {
    e.preventDefault()
    setKanjiValue(kanjiChangeValue)
  }
  const handleKanaInput = (e) => {
    e.preventDefault()
    setKana(kanaChangeValue)
  }
  return (
    <section className="kanji">
      <h1>漢字解</h1>
      <h2>输入你要查询的假名</h2>
      <form onSubmit={handleKanaInput}>
        <input
          ref={inputFirstFocus}
          className="kanji-input"
          type="text"
          value={kanaChangeValue}
          onChange={e => setKanaChangeValue(e.target.value)}
        />
        <button type="submit">提交</button>
      </form>
      <h3>输出结果：</h3>
      <FetchReading kanaValue={kana} />


      <h2>输入你要查询的漢字</h2>
      <form onSubmit={handleInput}>
        <input
          className="kanji-input"
          type="text"
          value={kanjiChangeValue}
          onChange={e => setKanjiChangeValue(e.target.value)}
        />
        <button type="submit">提交</button>
      </form>
      <h3>输出结果：</h3>

      <FetchKanji kanjiValue={kanjiValue}/>
      <FetchWords kanjiValue={kanjiValue} />
    </section>
  )
}

export default KanjiComponent