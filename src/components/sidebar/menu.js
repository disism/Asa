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
        <li>日语的形态要素解析</li>
      </Link>

      <li>检测固有表現</li>
      <li>日语关键词抽出</li>
      <li>日语文章出现的时间格式化</li>
      <li>日语文本对应的相似性</li>
    </ul>
  )
}

export default MenuList