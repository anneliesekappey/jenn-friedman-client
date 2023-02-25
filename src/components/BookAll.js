import Cover from '../images/Cover.jpg'
import { BookText } from './BookText.js'
import { BookDiv } from './Shared'

export const BookAll = () => {
  return (
    <div>
      <BookDiv>
        <img
          src={Cover}
          alt="Veganism and Eating Disorder Recovery"
          height="300px"
        />
        <BookText></BookText>
      </BookDiv>
    </div>
  )
}
