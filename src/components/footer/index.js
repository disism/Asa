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
            本网站是一个面向日语专业人员和爱好者的工具网站。
            源代码托管在 <a href="https://github.com/disism/asa">GITHUB</a>,
            如果您喜欢我们的内容，欢迎参与进来。
            <section className="support">
              特别感谢：
              <div className="goo">
                <a href="http://www.goo.ne.jp/">
                  <Img fluid={data.gooLogo.childImageSharp.fluid} title="supported by goo" />
                  supported by goo
                </a>
              </div>
              , 提供的 API。
            </section>
          </div>
          <div className="footer-dev">
            本网站由 <a href="https://disism.com">disism.com</a> 开发。
            欢迎访问 disism.com 系列网站
            <div>
              <a href="https://disism.com">disism.com</a>
              <p>官方主页，专注 Web 开发。</p>
            </div>

            <div>
              <a href="https://install.disism.com/">Install.disism.com</a>
              <p>面向 Linux 的爱好者和新手的教程网站，
                其中发布有关服务器操作，生产环境部署，
                新技术和安全性的文章和教程。</p>
            </div>
          </div>
        </div>
      </section>
      <section className="gatsby">
        © {new Date().getFullYear()}, <a href="https://disism.com">disism.com</a>, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </section>
    </>
  )
}

export default Footer