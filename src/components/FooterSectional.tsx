import React from 'react'
import styled from 'styled-components'

import Sectional from './Sectional/Sectional'
import SocialIcons from './Sectional/SocialIcons'

import config from '../config'

const FooterSectional: React.FC<{
  className?: string
}> = ({ className: className='' }) => {
  return (
    <Root className={className}>
      <ContentContainer>
        <CenterContainer>
          <SocialIconsContainer>
            <SocialIcons />
          </SocialIconsContainer>
          <ActionLink href="https://metxr.org" target="_blank">
            Visit the MetXR 3D Museum
          </ActionLink>
          <Copyright>
            &#169; 2021 {config.GALLERY_NAME}
          </Copyright>
        </CenterContainer>
      </ContentContainer>
    </Root>
  )
}

export default FooterSectional

const Root = styled(Sectional)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 22px 24px;
  background: #fbfbfb;
`;

const ContentContainer = styled.div`
  display: flex;
  max-width: 900px;
  margin: auto;

  @media (max-width: 910px) {
    /* display: block !important; */
  }
`;

const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    text-decoration: underline;
  }

  > span {
    display: inline-block;
    vertical-align: middle;
  }
`;

const SocialIconsContainer = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 6px;
`;

const ActionLink = styled.a`
  color: #bd9f5d;
  font-size: 14px;
  text-decoration: underline;
  white-space: nowrap;
`;

const Copyright = styled.div`
  font-size: 14px;
  color: #c0c1c3;
  margin: 0 8px;

  > * {
    margin: 2px;
  }
`;

