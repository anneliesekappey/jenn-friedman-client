import React, { useEffect, useState } from 'react'
import Jenn from '../images/Jenn.jpg'
import { JennText } from './JennText'
import { JennDiv } from './Shared'

export const JennAll = () => {
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
        <JennText />
      ) : (
        <JennDiv>
          <img src={Jenn} alt="Jenn Friedman" height="320px" />
        </JennDiv>
      )}
    </div>
  )
}
