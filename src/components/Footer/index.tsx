import React, {FC} from 'react';
import styled from 'styled-components';
import colors from '../../config/colors';

const Footer: FC = () => {
  
    return (
     
    <FooterWrapper>
        <small>Copyright Web Shop © 2022. All Rights Reserved</small>
    </FooterWrapper>
    )
  }
  
  const FooterWrapper = styled.div`
    background: ${colors.BLACK_COLOR};
    padding: 20px;
    color: ${colors.WHITE};
    text-align: center;
  `;
  
  export default Footer;
