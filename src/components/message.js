import React, { useLayoutEffect, useRef, useState } from "react"

const messageStyle = {
  marginBottom: `1rem`,
  borderRadius: `0.5rem`,
  backgroundColor: `#533D5B`,
  color: `white`,
  padding: `0.6rem`
}
const closeButtonStyle = {
  border: '1px solid #fff',
  outline: 'none',
  backgroundColor: '#533D5B',
  padding: '0 1rem',
  margin: '0 0 0 1rem'
}
const MessageBlock = () => {
  const messageSection = useRef(false)
  const handleCloseMessage = () => {
    messageSection.current.style.display = 'none'
    localStorage.setItem('message-close', 'message-is-close')
  }
  return (
    <section ref={messageSection}>
      <div style={messageStyle}>
        由于 API 被 GWF 屏蔽，中国大陆用户请使用代理访问
        <button style={closeButtonStyle} onClick={handleCloseMessage}>关闭</button>
      </div>
    </section>
  )
}
function Message() {
  const [key, setKey] = useState(false)

  useLayoutEffect(() => {
    setKey(localStorage.getItem('message-close'))
  }, [])

  return (
    <>
      {!key && <MessageBlock/>}
    </>
  )
}
export default Message