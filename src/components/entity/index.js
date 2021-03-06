import React, { useEffect, useReducer, useRef, useState } from "react"
import "./style.scss"
import axios from "axios"
import Message from "../message"
import { APP_ID, baseUrl } from "../../api/config"
import Reducer from "../reducer"
import InitialState from "../state"
import Loading from "../loading"

function EntityDataRequire() {
  const [state, dispatch] = useReducer(Reducer, InitialState)
  const [textChangeValue, setChangeTextValue] = useState('鈴木さんがきょうの9時30分に横浜に行きます。')
  const [resState, setResState] = useState('鈴木さんがきょうの9時30分に横浜に行きます。')
  const inputRef = useRef(null)
  /**
   * MOUNT
   */
  useEffect(() => {
    inputRef.current.focus()
    dispatch({ type: 'LOADING_TRUE' })
    axios.post(`${baseUrl}/entity`,{
      "app_id": APP_ID,
      "request_id":"record002",
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
  const entityResult = state.data.ne_list

  return (
    <>
      <Message/>
      <div>文本输入</div>
      <section className="ent-paragraph">
        <textarea
          ref={inputRef}
          type="text"
          value={textChangeValue}
          onChange={e => setChangeTextValue(e.target.value)}
        />
        <br/>
        <button type="button" onClick={handleChangeClick}>提交</button>
        <div>输出</div>
        {state.isLoading ? <Loading /> :
          <div className="entity-output">
            {entityResult && entityResult.map((item, idx) => {
              return (
                <div
                  className="entity-output-body"
                  key={idx}
                >
                  <div className="named">{item[0]}</div>
                  <div className="entity">{item[1]}</div>
                </div>
              )
            })}
            <h1>{state.error}</h1>
          </div>
        }
        <div>说明</div>
        <div style={{
          border: `2px solid #6A4C9C`,
          borderRadius: `0.3rem`,
          padding: `0.3rem`,
          margin: `0.3rem 0`
        }}>
          ART(人工物名)、ORG(組織名)、PSN(人名)、LOC(地名)、DAT(日付表現)、
          TIM(時刻表現)、MNY(金額表現)、PCT(割合表現)。
        </div>
      </section>
    </>
  )
}

export default EntityDataRequire