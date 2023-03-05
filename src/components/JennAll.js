import Cover from '../images/Cover.jpg'
import { JennText } from './JennText'
import { PageDiv, Image } from './Shared'

export const JennAll = () => {
  return (
    <div>
      <PageDiv>
        <Image
          src={Cover}
          alt="Veganism and Eating Disorder Recovery"
          style={{}}
        />
        <JennText></JennText>
      </PageDiv>
    </div>
  )
}
