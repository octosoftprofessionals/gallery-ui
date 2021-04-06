import React from 'react';
import styled from 'styled-components';

import Countdown from './Countdown';

const HeroAuction = () => (
  <Root>
    <p> Hero Placeholder </p>
    <Countdown />
  </Root>
);

export default HeroAuction;

const Root = styled.div`
  width: 100%;
  height: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
