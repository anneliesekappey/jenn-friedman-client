import Jenn2 from '../images/Jenn2.jpg'
import { AuthorText } from './AuthorText.js'
import { AuthorDiv } from './Shared'

export const AuthorAll = () => {
  return (
    <div>
      <AuthorDiv>
        <img src={Jenn2} alt="Jenn Friedman" height="300px" />
        <AuthorText></AuthorText>
      </AuthorDiv>
    </div>
  )
}
