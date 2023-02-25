import Cover from '../images/Cover.jpg'
import { JennText } from './JennText'
import { JennDiv, Image } from './Shared'

export const JennAll = () => {
  return (
    <div>
      <JennDiv>
        <Image src={Cover} alt="Veganism and Eating Disorder Recovery" />
        <JennText></JennText>
      </JennDiv>
    </div>
  )
}
