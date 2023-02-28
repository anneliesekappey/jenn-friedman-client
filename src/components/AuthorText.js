import React from 'react'
import { AuthorTextbox } from './Shared'

export const AuthorText = () => {
  return (
    <div>
      <AuthorTextbox>
        <h3
          style={{
            color: '#909090',
            fontFamily: 'Nunito',
            textAlign: 'center',
            marginTop: '6px',
          }}
        >
          Jenn Friedman
        </h3>
        <p>
          Jenn Friedman is a mental health counselor, author, and musician from
          New York City. She obtained her master’s degree in Counseling from
          Goldsmiths University of London and her Advanced Mental Health
          Counseling Graduate Certificate from the University at Buffalo. She
          currently provides therapy in New York City. Friedman has loved
          creating written and musical work since she was a child. After
          studying music composition at SUNY Purchase and going through her
          personal mental health recovery journey, she authored Eating Disorders
          on the Wire: Music and Metaphor as Pathways to Recovery (H.T.F.K.
          Press) and recorded its coinciding album, On the Wire (Personal Bias
          Records). She has performed her work at various musical venues and
          mental health events. Friedman has been practicing veganism for many
          years and is deeply supportive of the vegan movement. She resides with
          her partner in their Manhattan apartment.
        </p>
      </AuthorTextbox>
    </div>
  )
}
