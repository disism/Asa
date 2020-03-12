import React, { useEffect, useRef, useState } from "react"
import "./style.scss"
import axios from "axios"
import Message from "../message"
import { APP_ID, baseUrl } from "../../api/config"

function EntityDataRequire() {
  const [entityData, setEntityData] = useState([])
  const [textChangeValue, setChangeTextValue] = useState('鈴木さんがきょうの9時30分に横浜に行きます。')
  const [resState, setResState] = useState('鈴木さんがきょうの9時30分に横浜に行きます。')
  const [isLoading, setIsLoading] = useState(true)

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    axios.post(`${baseUrl}/entity`,{
      "app_id": APP_ID,
      "request_id":"record002",
      "sentence": `${resState}`,
    })
      .then(res => {
        setIsLoading(false)
        setEntityData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[resState])

  const handleChangeClick = ()=> {
    setResState(textChangeValue)
  }
  const entityResult = entityData.ne_list
  console.log(entityResult)

  return (
    <>
      <Message/>
      <div>输出</div>
      {isLoading ? <div className="loading"> 少々お待ちくださいませ... </div> :<div className="entity-output">
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
      </div>}
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
      </section>
    </>
  )
}

export default EntityDataRequire