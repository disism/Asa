import React, { useEffect, useState } from "react"
import "./style.scss"
import axios from "axios"

const apiUrl = 'https://labs.goo.ne.jp/api/entity'
const app_id = process.env.GOO_API_APP_ID

function EntityDataRequire() {
  const [entityData, setEntityData] = useState([''])
  const [textChangeValue, setChangeTextValue] = useState('text')
  const [resState, setResState] = useState('鈴木さんがきょうの9時30分に横浜に行きます。')

  useEffect(() => {
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
      {entityData.ne_list}
      <br/>
      <textarea
        type="text"
        value={textChangeValue}
        onChange={e => setChangeTextValue(e.target.value)}
      />
      <br/>
      <button type="button" onClick={handleChangeClick}>提交</button>
    </>
  )
}

export default EntityDataRequire