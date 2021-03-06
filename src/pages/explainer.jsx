import React from 'react'

import Layout from 'components/Layout'
import { Container } from 'components/Grid'
import { Link } from 'components/Link'
import Map from 'components/Map'

import styled from 'styled-components'

const Section = styled.section`
  h3 {
    margin-bottom: 0.25rem;
  }

  &:not(:first-child) {
    margin-top: 3rem;
  }
`

const ExplainerPage = () => (
  <Layout>
    <Container my="2rem">
      <h1>Welcome to the Gatsby starter for Mapbox GL!</h1>
      <Section>
        <h3>Example: a fixed size map:</h3>
        <Map width="400px" height="400px" />
      </Section>

      <Section>
        <h3>
          Example: a fluid map that fills the container and different styles:
        </h3>
        <Map height="400px" styles={['cj5baffd71bcf2ro63aiys3qo', 'cjf8jn2jo3tmb2ro16oc6ko3q']} />
      </Section>

      <Section>
        <h3>Full page examples:</h3>
        <ul>
          <li>
            <Link to="/">Full Screen Map</Link>
          </li>
        </ul>
      </Section>
    </Container>
  </Layout>
)

export default ExplainerPage
