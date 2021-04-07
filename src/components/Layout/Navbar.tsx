import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
import Sectional from '../Sectional/Sectional'
import SocialIcons from '../Sectional/SocialIcons'

import logoSrc from '../../assets/logo.png'

const Navbar = () => (
  <NavbarSectional innerStyle={{ padding: 0 }}>
    <NavbarContent>
      <LogoLink to="/">
        <LogoLinkImg src={logoSrc} />
      </LogoLink>
      <SocialLinks>
        <SubmitLink to="/submit-art">
          Submit Art
        </SubmitLink>
        <SocialIconList>
          <SocialIcons />
        </SocialIconList>
      </SocialLinks>
    </NavbarContent>
  </NavbarSectional>
)

export default Navbar

const NavbarSectional = styled(Sectional)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 99;
  background: white;
`

const NavbarContent = styled.div`
  max-width: 1160px;
  margin: auto;
  width: 100%;
  display: flex;
`

const LogoLink = styled(Link)`
  font-family: Helvetica, Helvetica Neue, sans-serif;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: #e0bd70;
  font-size: 22px;
  line-height: 30px;
  margin-top: -1px;
`

const LogoLinkImg = styled.img`
  height: 50px;
`

const SocialLinks = styled.span`
  text-align: right;
  flex: 1;
  margin-top: 5px;
  white-space: nowrap;
`

const SubmitLink = styled(Link)`
  vertical-align: top;
  margin-right: 15px;
  text-transform: uppercase;
  font-family: Helvetica Neue, Helvetica, sans-serif;
  font-weight: bold;
  letter-spacing: -0.5px;
  color: #e0bd70 !important;
`

const SocialIconList = styled.span`
  @media (max-width: 630px) {
    display: none;
  }
`
