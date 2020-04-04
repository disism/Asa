import React from "react"
import "./style.scss"

function Footer() {

  return (
    <>

      <section className="gatsby">
        © {new Date().getFullYear()} <a href="https://disism.com" target="_blank" rel="noopener noreferrer">disism.com</a> All Rights Reserved.  Built with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
      </section>
    </>
  )
}

export default Footer