import Jenn2 from '../images/Jenn2.jpg'
import { AuthorText } from './AuthorText.js'
import { AuthorDiv, Image } from './Shared'

export const AuthorAll = () => {
  return (
    <div>
      <AuthorDiv>
        <Image src={Jenn2} alt="Jenn Friedman" />
        <AuthorText></AuthorText>
      </AuthorDiv>
    </div>
  )
}
