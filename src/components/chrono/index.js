import React, { useEffect, useState } from "react"
import "./style.scss"
import axios from "axios"

const apiUrl = 'https://labs.goo.ne.jp/api/chrono'
const app_id = process.env.GOO_API_APP_ID

function ChronoDataRequire() {
  const [chronoData, setChronoData] = useState([''])
  const [textChangeValue, setChangeTextValue] = useState('今日')
  const [resState, setResState] = useState('今日')

  useEffect(() => {
    axios.post(apiUrl,{
      "app_id": app_id,
      "request_id":"record007",
      "sentence": `${resState}`,
    })
      .then(res => {
        setChronoData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[resState])

  const handleChangeClick = ()=> {
    setResState(textChangeValue)
  }
  console.log(chronoData)
  return (
    <>
      <section className="chr-example">
        <div>例如输入：今日の10時半に出かけます。</div>
        <div>会解析成： 今日（你当前时间） 10時半（你当前时间的）T10:30</div>
      </section>
      <br/>
      {chronoData.datetime_list}
      <div className="chr-input">
        <textarea
          type="text"
          value={textChangeValue}
          onChange={e => setChangeTextValue(e.target.value)}
        />
      </div>
      <br/>
      <button type="button" onClick={handleChangeClick}>提交</button>
    </>
  )
}

export default ChronoDataRequire