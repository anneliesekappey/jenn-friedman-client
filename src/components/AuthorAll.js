import React, { useEffect, useState } from 'react'
import Jenn2 from '../images/Jenn2.jpg'
import { AuthorText } from './AuthorText.js'
import { AuthorDiv } from './Shared'

export const AuthorAll = () => {
  const [tap, setTap] = useState(false)
  const [click, setClick] = useState(false)

  const onClick = () => {
    setClick(true)
  }

  const onDoubleClick = () => {
    setClick(false)
  }

  const onTap = () => {
    setTap(true)
  }

  const onDoubleTap = () => {
    setTap(false)
  }

  useEffect(() => {
    onDoubleTap()
    onDoubleClick()
  }, [])

  return (
    <div
      onTouchStart={onTap}
      onTouchEnd={onDoubleTap}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      role="textbox"
      tabIndex="-3"
    >
      {tap || click ? (
        <AuthorText />
      ) : (
        <AuthorDiv>
          <img src={Jenn2} alt="Jenn Friedman" height="360px" />
        </AuthorDiv>
      )}
    </div>
  )
}
