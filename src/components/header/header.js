import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import "./style.scss"
import Logo from "../../assets/icons/icons8-cat.svg"
import MenuList from "../sidebar/menu"

const MenuListFunc = () => {
  return (
    <section className="header-menu">
      <MenuList />
    </section>
  )

}


const Header = ({ siteTitle }) => {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <header className="header">
        <section className="header-inner">
          <div className="header-logo">
            <Link to="/">
              <img src={Logo} alt="/" />
              {siteTitle}
            </Link>
          </div>
          <div className="header-github">
            <a href="https://github.com/disism/asa" target="_blank" rel="noopener noreferrer">Github</a>
          </div>

          <button
            className="mobile-menu"
            onClick={() => setMenu(!menu)}
          >
            菜单
          </button>
        </section>
      </header>
      {menu && <MenuListFunc />}
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
