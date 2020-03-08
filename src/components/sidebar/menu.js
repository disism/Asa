import React from "react"
import { Link } from "gatsby"

const MenuList = () => {
  return (
    <ul>
      <Link to="/">
        <li>首页</li>
      </Link>
      <Link to="/hiragana/">
        <li>ひらがな化</li>
      </Link>
      <Link to="/morphological/">
        <li>词素解析</li>
      </Link>

      <Link to="/entity/">
        <li>固有表現抽出</li>
      </Link>

      <Link to="/keyword/">
        <li>キーワード抽出</li>
      </Link>

      <Link to="/chrono/">
        <li>時刻情報正規化</li>
      </Link>
    </ul>
  )
}

export default MenuList