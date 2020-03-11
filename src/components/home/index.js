import React from "react"
import "./style.scss"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

function Home() {

  const data = useStaticQuery(graphql`
    query {
      gooLogo: file(relativePath: { eq: "sgoo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const ListOfServices = [
    {
      "link": "/hiragana/",
      "list_number": "一、平假名转换・ひらがな化",
      "englist_title": "Japanese Hiragana Conversion",
      "desc": "日语汉字和片假名转换成平假名。"
    },
    {
      "link": "/morphological/",
      "list_number": "二、词素解析・形態素解析",
      "englist_title": "Japanese Morphological Analysis",
      "desc": "分析出日语中的形态词素，（名词，动词，接续词，活用，接尾型等）。"
    },
    {
      "link": "/entity/",
      "list_number": "三、命名实体抽出・固有表現抽出",
      "englist_title": "Japanese Named Entity Extraction",
      "desc": "列出文本中的数据，例如名字，时间，和地点等。"
    },
    {
      "link": "/keyword/",
      "list_number": "四、关键词抽出・キーワード抽出",
      "englist_title": "Japanese Keyword Extraction",
      "desc": "列出文章中出现的关键词和出现频率。"
    },
    {
      "link": "/chrono/",
      "list_number": "五、日语文章出现的时间格式化・時刻情報正規化",
      "englist_title": "Japanese Time format",
      "desc": "日语文章出现的时间格式化"
    },
  ]


  return (
    <section className="list-of-services">
      <h1>功能一览</h1>
      <ul>
        {ListOfServices && ListOfServices.map((items, idx) => {
          return (
            <li key={idx}>
              <Link to={items.link}>
                <div>{items.list_number}</div>
                <div className="english-name">{items.englist_title}</div>
                <div>{items.desc}</div>
              </Link>
            </li>
          )
        })}
      </ul>
      <hr />

      <p>
        感谢您的访问。
        本应用是一个面向日语研究者和爱好者的工具应用。
        源代码在
        <a href="https://github.com/disism/asa" target="_blank" rel="noopener noreferrer">
          GITHUB
        </a>。
      </p>
      <p>
        特别感谢：
          <a href="http://www.goo.ne.jp/" target="_blank" rel="noopener noreferrer">
            supported by goo
          </a> ,
          <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
            Amazon Web Services
          </a>
        提供的 API。
      </p>
      <div className="goo-image">
        <Img fluid={data.gooLogo.childImageSharp.fluid} title="supported by goo" />
      </div>
    </section>
  )
}

export default Home