import Cover from '../images/Cover.jpg'
import { BookText } from './BookText.js'
import { BookDiv, Image } from './Shared'

export const BookAll = () => {
  return (
    <div>
      <BookDiv>
        <Image src={Cover} alt="Veganism and Eating Disorder Recovery" />
        <BookText></BookText>
      </BookDiv>
    </div>
  )
}
