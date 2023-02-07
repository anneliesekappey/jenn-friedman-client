import React, { useEffect, useState } from 'react'
import Jenn from '../images/Jenn.jpg'
import { JennText } from './JennText'
import { JennDiv } from './Shared'

export const JennAll = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(true)
  }

  const onLeave = () => {
    setHover(false)
  }

  useEffect(() => {
    onLeave()
  }, [])

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="textbox"
      tabIndex="-3"
    >
      {hover ? (
        <JennText />
      ) : (
        <JennDiv>
          <img src={Jenn} alt="Jenn Friedman" height="320px" />
        </JennDiv>
      )}
    </div>
  )
}
