import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function About() {
  return (
    <>
      <Layout>
        <SEO title="About" />
        <h1>About</h1>
        <section className="about">
          <h2>欢迎使用 Asa「朝」「旭」「アサ」「あさ」</h2>
          <p>
            Asa 为日语专业的学生和爱好者们创造更优质的学习内容，体验更广阔的学习平台。
            本站不会收集您的任何个人信息和输入的内容。欢迎您的意见和建议。
          </p>
          <p>与此同时，推荐您访问该仓库:
            /<a href="https://github.com/disism/ninja/tree/master/src/pages/markdown" target="_blank" rel="noopener noreferrer">
              NINJA !!
            </a>/
          </p>
          <p>読解、聴解、発表、中国語翻訳など、色々な日本語学習教材があります。</p>
          <section style={{ padding: `1rem 0` }}>
            <h2>源代码</h2>
            <p>
              感谢您的访问。 本网站是一个面向日语专业的研究人员和爱好者的开源 WEB 应用程序，使用 Goo 提供的 API 和 Gatsby 编写，源代码在
              <a href="https://github.com/disism/asa" target="_blank" rel="noopener noreferrer">
                GITHUB
              </a>。
            </p>
            <p>漢字解 API 来自 ： <a href="https://kanjiapi.dev/" target="_blank" rel="noopener noreferrer">https://kanjiapi.dev/</a></p>
            <h2>disism.com</h2>
            <p>
              本应用由
              <a href="https://disism.com" target="_blank" rel="noopener noreferrer">
                disism.com
              </a>
              开发。
              disism 是一个互联网爱好者开发的一个系列网站。
              disism 热爱自由、平等、开放的互联网。欢迎您来
              <a href="https://disism.com/about" target="_blank" rel="noopener noreferrer">
                了解我们
              </a>
            </p>

            <h2>联系方式</h2>
            <p>
              网站管理员联系方式:
              /<a href="https://t.me/hvturingga" target="_blink" rel="noopener noreferrer">
              Telegram
            </a>/,
              /<a href="https://instagram.com/hvturingga" target="_blink">
              Instagram
            </a>/,
              /<a href="https://github.com/disism" target="_blink">
              Github
            </a>/,
              /<a href="mailto:feedback@disism.com">
              E-Mail
            </a>/。
            </p>
          </section>
        </section>
      </Layout>
    </>
  )
}

export default About