import React from "react"
import "./style.scss"

function Footer() {

  return (
    <>

      <section className="gatsby">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
      </section>
    </>
  )
}

export default Footer