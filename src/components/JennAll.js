import Cover from '../images/Cover.jpg'
import { JennText } from './JennText'
import { JennDiv } from './Shared'

export const JennAll = () => {
  return (
    <div>
      <JennDiv>
        <img
          src={Cover}
          alt="Veganism and Eating Disorder Recovery"
          height="300px"
        />
        <JennText></JennText>
      </JennDiv>
    </div>
  )
}
