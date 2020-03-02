import React, { useEffect, useRef, useState } from "react"
import "./style.scss"
import axios from "axios"

const apiUrl = 'https://labs.goo.ne.jp/api/entity'
const app_id = process.env.GOO_API_APP_ID

function EntityDataRequire() {
  const [entityData, setEntityData] = useState([''])
  const [textChangeValue, setChangeTextValue] = useState('鈴木さん')
  const [resState, setResState] = useState('鈴木さん')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    axios.post(apiUrl,{
      "app_id": app_id,
      "request_id":"record002",
      "sentence": `${resState}`,
    })
      .then(res => {
        setEntityData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[resState])

  const handleChangeClick = ()=> {
    setResState(textChangeValue)
  }
  console.log(entityData.ne_list)
  return (
    <>
      <section className="ent-example">
        <div>例如输入：鈴木さんがきょうの9時30分に横浜に行きます。</div>
        <div>会出现：鈴木 PSN 9時30分 TIM 横浜 LOC (PSN = 人， TIM = 时间， LOC = 地点)</div>
      </section>
      {entityData.ne_list}
      <br/>
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