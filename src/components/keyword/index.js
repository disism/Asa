import React, { useEffect, useState } from "react"
import axios from "axios"

const apiUrl = 'https://labs.goo.ne.jp/api/keyword'
const app_id = process.env.GOO_API_APP_ID

function KeywordRequireData() {
  const [keywordData, setKeywordData] = useState([])

  useEffect(() => {
    axios.post(apiUrl, {
      "app_id": app_id,
      "request_id":"record006",
      "title": `【1分間名作あらすじ】一番の幸せは、他人の幸せを願うこと――宮沢賢治『銀河鉄道の夜』`,
      "body": `　主人公のジョバンニは貧しい学生で、活版印刷所でアルバイトをしながら病気の母を看病している。父親は漁に行ったきり帰って来ない。孤独な彼は同級生からよく馬鹿にされるが、親友のカムパネルラだけは違った。  「星祭」の夜、ジョバンニが母のために牛乳をもとめて歩いていると、銀河の祭りに向かう同級生たちに遭遇する。いじめっ子のザネリが彼のことをからかい、そこにいたカムパネルラは気の毒そうに下を向いていた。ジョバンニはひとりで町のはずれに向かう。`,
    })
      .then(res => {
        setKeywordData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  },[])

  console.log(keywordData.keywords)

  return (
    <>
      <div>关键词功能稍后推出</div>
    </>
  )
}

export default KeywordRequireData