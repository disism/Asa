import React from "react"
import "./style.scss"

function Home() {
  return (
    <section className="list-of-services">
        <ul>
          <li>
            <p>ひらがな化</p>
            <div>Japanese Hiragana Conversion</div>
            <div>汉字和片假名转换成平假名</div>
          </li>
          <li>
            <p>日语的形态要素解析</p>
            <div>Japanese Morphological Analysis</div>
            <div>分析出日语中的词性，（名词，动词，接续词，活用，接尾型等）</div>
          </li>
          <li>
            <p>检测固有表現</p>
            <div>检测文章中出现的名字，时间，和地点，并列出出现次数</div>
          </li>
          <li>
            <p>日语关键词抽出</p>
            <div>Japanese Keyword Extraction</div>
            <div>組織など文書を特徴づけるキーワードを抽出します。
            </div>
            <div>
              Japanese Keyword Extraction
            </div>
          </li>
          <li>日语文章出现的时间格式化</li>
          <li>日语文本对应的相似性</li>
        </ul>

    </section>
  )
}

export default Home