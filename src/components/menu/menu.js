import React from "react"
import { Link } from "gatsby"

const MenuList = () => {
  const MenuList = [
    {
      "link": "/",
      "name": "首页"
    },
    {
      "link": "/hiragana/",
      "name": "ひらがな化"
    },
    {
      "link": "/morphological/",
      "name": "词素解析"
    },
    {
      "link": "/entity/",
      "name": "固有表現抽出"
    },
    {
      "link": "/keyword/",
      "name": "キーワード抽出"
    },
    {
      "link": "/chrono/",
      "name": "時刻情報正規化"
    },
  ]
  return (
    <ul>
      {MenuList && MenuList.map((items, idx) => {
        return (
          <div key={idx}>
            <Link to={items.link}>
              <li>{items.name}</li>
            </Link>
          </div>
        )
      })}
    </ul>
  )
}

export default MenuList