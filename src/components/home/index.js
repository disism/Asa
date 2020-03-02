import React from "react"
import "./style.scss"

function Home() {
  return (
    <section className="list-of-services">
      <h1>功能一览</h1>
        <ul>
          <li>
            <div>一、平假名转换</div>
            <div className="english-name">Japanese Hiragana Conversion</div>
            <div>日语汉字和片假名转换成平假名</div>
          </li>
          <li>
            <div>二、形态要素解析</div>
            <div className="english-name">Japanese Morphological Analysis</div>
            <div>分析出日语中的词性，（名词，动词，接续词，活用，接尾型等）</div>
          </li>
          <li>
            <div>三、检测命名实体</div>
            <div className="english-name">Japanese Named Entity Extraction</div>
            <div>命名实体，例如人名，位置名称等，检测出文章中出现的名字，时间，和地点，并列出出现的次数</div>
          </li>
          <li>
            <div>四、关键词抽出</div>
            <div className="english-name">Japanese Keyword Extraction</div>
            <div>列出文章中出现的关键词和出现频率。</div>
          </li>
          <li>
            <div>五、日语文章出现的时间格式化</div>
            <div className="english-name">Japanese Time format</div>
            <div>例如输入：今日の10時半に出かけます。</div>
            <div>会解析成： 今日（你当前时间） 10時半（你当前时间的）T10:30</div>
          </li>
        </ul>

    </section>
  )
}

export default Home