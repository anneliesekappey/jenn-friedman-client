import Cover from '../images/Cover.jpg'
import { JennText } from './JennText'
import { JennDiv, Image } from './Shared'

export const JennAll = () => {
  return (
    <div>
      <JennDiv>
        <Image
          src={Cover}
          alt="Veganism and Eating Disorder Recovery"
          style={{ width: '30%', height: '30%' }}
        />
        <JennText></JennText>
      </JennDiv>
    </div>
  )
}
