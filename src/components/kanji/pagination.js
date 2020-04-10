import React from "react"
import "./style.scss"
import { Link } from "gatsby"

function KanjiPagination({ postPerPage, totalPosts, paginate }) {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <>
      <nav className="pagination-list">
          {pageNumbers.map(number => {
            return (
              <ul key={number}>
                <li>
                  <Link to="/kanji/#result" onClick={() => paginate(number)}>{number}</Link>
                </li>
              </ul>
            )
          })}
      </nav>
    </>
  )
}

export default KanjiPagination