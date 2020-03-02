import React from "react"
import { Link } from "gatsby"

const MenuList = () => {
  return (
    <ul>
      <Link to="/">
        <li>首页</li>
      </Link>
      <Link to="/hiragana/">
        <li>汉字转换成假名</li>
      </Link>
      <Link to="/morphological/">
        <li>形态要素解析</li>
      </Link>

      <Link to="/entity/">
        <li>检测命名实体</li>
      </Link>

      <Link to="/keyword/">
        <li>关键词抽出</li>
      </Link>

      <Link to="/chrono/">
        <li>时间格式化</li>
      </Link>
    </ul>
  )
}

export default MenuList