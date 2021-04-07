import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const FlexLink = ({ internal, href, children, ...props }) => {
  return internal ? (
    <Link to={href} {...props}>
      {children}
    </Link>
  ) : (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

const IconTextLink: React.FC<{
  href?: string
  icon: React.FC
  title: string
  internal?: boolean
}> = ({ children, icon: Icon, title, href = "", internal = false }) => {
  return (
    <Root>
      <IconLinkItem>
        <FlexLink internal={internal} href={href}>
          <Icon />
        </FlexLink>
      </IconLinkItem>
      <InfoContainer>
        <Title>
          <FlexLink internal={internal} href={href}>
            {title}
          </FlexLink>
        </Title>
        <div>
          {children}
        </div>
      </InfoContainer>
    </Root>
  )
}

export default IconTextLink

const Root = styled.div`
  display: flex;
  width: 100%;
  padding: 8px;
  margin: 8px;
  box-sizing: border-box;
`

const IconLinkItem = styled.div`
  font-size: 40px;
  padding: 8px;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 8px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
`

const StyledFlexLink = styled.div`
  color: #bbb;
  text-decoration: none;

  :hover {
    color: white;
  }
`
