import Jenn2 from '../images/Jenn2.jpg'
import { AuthorText } from './AuthorText.js'
import { PageDiv, Image } from './Shared'

export const AuthorAll = () => {
  return (
    <div>
      <PageDiv>
        <Image src={Jenn2} alt="Jenn Friedman" style={{}} />
        <AuthorText></AuthorText>
      </PageDiv>
    </div>
  )
}
