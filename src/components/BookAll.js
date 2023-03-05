import Cover from '../images/Cover.jpg'
import { BookText } from './BookText.js'
import { PageDiv, Image } from './Shared'

export const BookAll = () => {
  return (
    <div>
      <PageDiv>
        <Image src={Cover} alt="Veganism and Eating Disorder Recovery" />
        <BookText></BookText>
      </PageDiv>
    </div>
  )
}
