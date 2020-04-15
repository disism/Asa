
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
    {
      "link": "/kanji",
      "name": "漢字解"
    }
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
      <li>
        <a href="https://disism.com/software/asa/" target="__blink">关于本站</a>
      </li>
    </ul>
  )
}

export default MenuList