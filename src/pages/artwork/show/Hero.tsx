import React from 'react'
import styled from 'styled-components'

const Hero = ({ children }) => (
  <HeroRoot>
    <HeroAssetContainer>{children}</HeroAssetContainer>
  </HeroRoot>
)

export default Hero

const HeroRoot = styled.div`
  margin-top: 78px;
  background-color: antiquewhite;
  padding: 60px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroAssetContainer = styled.div`
  width: 50%;
  max-width: 520px;
`
