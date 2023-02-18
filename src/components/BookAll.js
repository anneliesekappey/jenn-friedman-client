import React, { useEffect, useState } from 'react'
import Cover from '../images/Cover.jpg'
import { BookText } from './BookText.js'
import { BookDiv } from './Shared'

export const BookAll = () => {
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
        <BookText />
      ) : (
        <BookDiv>
          <img
            src={Cover}
            alt="Veganism and Eating Disorder Recovery Cover"
            height="390px"
          />
        </BookDiv>
      )}
    </div>
  )
}
