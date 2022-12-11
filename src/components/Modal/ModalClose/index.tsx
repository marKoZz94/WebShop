import styled from 'styled-components';
import colors from '../../../config/colors';

const ModalClose = styled.span`
  color: ${colors.TEXT_GRAY};
  position: absolute;
  right: 24px;
  top: 24px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: opacity 100ms ease-in-out;

  /* img, .isvg {
    display: block;
    width: 14px;
    height: 14px;
  } */

  &:hover {
    opacity: 0.6;
  }
`;

export default ModalClose;
