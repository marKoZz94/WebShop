import styled from 'styled-components';
import colors from '../../../config/colors';

const ModalContainer = styled.div`
  width: 800px;
  max-height: 100%;
  overflow-y: auto;
  max-width: 100%;
  background: ${colors.WHITE_COLOR};
  box-shadow: 0 0 20px ${colors.DARK_GRAY_COLOR};
  border-radius: 10px;
  margin: 0 auto;
  align-self: flex-start;
  flex-shrink: 0;
  position: relative;
  transform: translate(0,-75%);
  transition: transform 300ms ease-out;
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  padding: 70px 30px 50px;

  @media (max-width: 991px) {
    padding: 58px 30px 30px;
  }

  @media (max-width: 767px) {
    padding: 56px 15px 30px;
  }

  .scrollbar {
    height: 100% !important;
    max-height: none !important;
  }

  .scrollbar-content {
    max-height: none !important;
  }
`;

export default ModalContainer;
