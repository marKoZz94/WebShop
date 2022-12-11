/*
 * Homepage
*/

import React, { FC } from 'react';
import styled from 'styled-components';
import Products from '../Products';

const Homepage: FC = () => {
  
  return (
    <HomepageWrapper>
      <Products />
    </HomepageWrapper>
  );
}

const HomepageWrapper = styled.div``;

export default Homepage;
