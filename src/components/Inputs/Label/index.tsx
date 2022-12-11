import styled from 'styled-components';
import colors from '../../../config/colors';

const Label = styled.label`
  display: block;
  color: ${colors.BLACK_COLOR};
  margin-bottom: 10px;

  sup {
    color: #ff0000;
    font-size: 12px;
    position: relative;
    right: -3px;
    bottom: -5px;
  }
`;

export default Label;
