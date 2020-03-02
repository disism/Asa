import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import "./style.scss"

function Footer() {
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

  return (
    <>
      <section className="footer">
        <div className="footer-desc">
          <div className="footer-thanks">
            感谢您的访问。
            本应用是一个面向日语研究者和爱好者的工具应用。
            源代码在 <a href="https://github.com/disism/asa" target="_blank" rel="noopener noreferrer">GITHUB</a>。
            <section className="support">
              特别感谢：
              <div className="goo">
                <a href="http://www.goo.ne.jp/" target="_blank" rel="noopener noreferrer">
                  supported by goo
                </a>
              </div>
              , 提供的 API。
            </section>
            <div className="footer-goo-img">
              <Img fluid={data.gooLogo.childImageSharp.fluid} title="supported by goo" />
            </div>
          </div>
          <div className="footer-dev">
            <p>本网站由 disism.com 开发。<a href="https://disism.com/about" target="_blank" rel="noopener noreferrer">了解我们</a>。 欢迎访问 disism.com 系列网站</p>
            <div>
              1，<a href="https://disism.com" target="_blank" rel="noopener noreferrer">disism.com</a>
              <p>官方主页，让我们去做一些真正有趣的事情。</p>
            </div>
            <div>
              2，<a href="https://install.disism.com/" target="_blank" rel="noopener noreferrer">Install.disism.com</a>
              <p>面向 Linux 的爱好者和新手的教程网站，
                其中发布有关服务器操作，生产环境部署，
                新技术和安全性的文章和教程。</p>
            </div>
          </div>
        </div>
      </section>
      <section className="gatsby">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
      </section>
    </>
  )
}

export default Footer