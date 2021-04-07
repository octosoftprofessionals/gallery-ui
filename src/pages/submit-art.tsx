import React from 'react'
import styled from 'styled-components'

import FooterSectional from '../components/FooterSectional'
import Layout from '../components/Layout/Layout'

import config from '../config'

const SubmitWorkPage = () => {
  return (
    <Layout>
      <Container>
        <h2>Submit your work as an NFT for the {config.GALLERY_NAME}</h2>
        <p>We are open to submissions!</p>
        <p>
          Fill out this form to have your work reviewed for addition to our NFT
          gallery. After review, we will mint an NFT for your artwork and update
          you when the auction is announced.
        </p>
        <p>
          To learn more about NFTs,
          <a
            href="https://opensea.io/blog/guides/non-fungible-tokens/"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
          .
        </p>
        <p>
          Questions or comments? Email us at{' '}
          <a href={`mailto: ${config.CONTACT_EMAIL}`}>{config.CONTACT_EMAIL}</a>
          .
        </p>
        <p>
          <em>Please wait while the form loads below.</em>
        </p>
        <FormContainer>
          <iframe
            className="airtable-embed"
            src={config.AIRTABLE_EMBED_SRC}
            frameborder="0"
            onmousewheel=""
            width="100%"
            height="1250px"
            style={{
              background: 'transparent',
            }}
          />
        </FormContainer>
      </Container>
      <Footer />
    </Layout>
  )
}

export default SubmitWorkPage

const Container = styled.div`
  color: black;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  max-width: 600px;
  padding: 0 16px;
  margin: 200px auto;

  > * {
    padding-right: 16px;
  }

  h2 {
    text-transform: uppercase;
  }

  > h3 {
    text-transform: uppercase;
  }

  p {
    font-size: 1.25rem;
    max-width: 600px;
    line-height: 1.5;
    font-weight: 300;
    z-index: 3;
    position: relative;
    background: white;
    margin-bottom: 0;
    margin-top: 0;
    padding-top: 0.25em;
    padding-bottom: 0.75em;
  }
`

const FormContainer = styled.div`
  > iframe {
    margin-top: -80px;
    overflow: hidden;
  }

  :global(.formHeader) {
    display: none !important;
  }

  :global(.formDesignerView .form .formHeader, .sharedForm .formHeader) {
    display: none !important;
  }
`

const Footer = styled(FooterSectional)`
  background: white;
`
