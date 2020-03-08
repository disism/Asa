import React from "react"
import "./style.scss"
import { Link } from "gatsby"

function Home() {
  return (
    <section className="list-of-services">
      <h1>功能一览</h1>
        <ul>
          <li>
            <Link to="/hiragana/">
              <div>一、平假名转换・ひらがな化</div>
              <div className="english-name">Japanese Hiragana Conversion</div>
              <div>日语汉字和片假名转换成平假名。</div>
            </Link>
          </li>

          <li>
            <Link to="/morphological/">
              <div>二、词素解析・形態素解析</div>
              <div className="english-name">Japanese Morphological Analysis</div>
              <div>分析出日语中的形态词素，（名词，动词，接续词，活用，接尾型等）</div>
            </Link>
          </li>

          <li>
            <Link to="/entity/">
              <div>三、命名实体抽出・固有表現抽出</div>
              <div className="english-name">Japanese Named Entity Extraction</div>
              <div>列出文本中的数据，例如名字，时间，和地点等。</div>
            </Link>
          </li>

          <li>
            <Link to="/keyword/">
              <div>四、关键词抽出・キーワード抽出</div>
              <div className="english-name">Japanese Keyword Extraction</div>
              <div>列出文章中出现的关键词和出现频率。</div>
            </Link>
          </li>
          <li>
            <Link to="/chrono/">
              <div>五、日语文章出现的时间格式化・時刻情報正規化</div>
              <div className="english-name">Japanese Time format</div>
              <div>日语文章出现的时间格式化</div>
            </Link>
          </li>
        </ul>

    </section>
  )
}

export default Home