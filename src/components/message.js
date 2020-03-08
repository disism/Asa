import React from "react"

const messageStyle = {
  marginBottom: `1rem`,
  borderRadius: `0.5rem`,
  backgroundColor: `#533D5B`,
  color: `white`,
  padding: `0.6rem`
}
function Message() {
  return (
    <div style={messageStyle}>
      由于 API 被 GWF 屏蔽，中国大陆用户请使用代理访问
    </div>
  )
}
export default Message