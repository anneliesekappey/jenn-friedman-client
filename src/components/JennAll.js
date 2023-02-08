import React, { useEffect, useState } from 'react'
import Jenn from '../images/Jenn.jpg'
import { JennText } from './JennText'
import { JennDiv } from './Shared'

export const JennAll = () => {
  const [tap, setTap] = useState(false)
  const onTap = () => {
    setTap(true)
  }

  const onDoubleTap = () => {
    setTap(false)
  }

  useEffect(() => {
    onDoubleTap()
  }, [])

  return (
    <div
      onTouchStart={onTap}
      onTouchEnd={onDoubleTap}
      role="textbox"
      tabIndex="-3"
    >
      {tap ? (
        <JennText />
      ) : (
        <JennDiv>
          <img src={Jenn} alt="Jenn Friedman" height="320px" />
        </JennDiv>
      )}
    </div>
  )
}
