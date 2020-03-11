import React from "react"
import "./style.scss"

function Footer() {

  return (
    <>
      <section className="footer">
        <div className="footer-desc">
          <div className="footer-dev">
            <p>本网站由 disism.com 开发。</p>
            <div>
              1，<a href="https://disism.com" target="_blank" rel="noopener noreferrer">disism.com</a>
              <p>开发者主页</p>
            </div>
            <div>
              2，<a href="https://install.disism.com/" target="_blank" rel="noopener noreferrer">Install.disism.com</a>
              <p>面向 Linux 爱好者和新手的教程网站，会发布有关服务器操作、生产环境部署、新技术和安全性的文章和教程。</p>
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