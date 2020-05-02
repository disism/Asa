import React from "react"
import "./style.scss"

function Loading() {
  return (
      <section className="loading">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20"></circle>
        </svg>
      </section>
  )
}
export default Loading