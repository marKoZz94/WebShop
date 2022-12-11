import styled from 'styled-components';
import colors from '../../../config/colors';

const NotificationMessage = styled.div`
  position: relative;
  background: ${colors.WHITE_COLOR};
  box-shadow: 0 0 40px rgba(204, 204, 204, 0.16);
  padding: 12px 10px 12px 52px;
  border-radius: 20px;
  max-width: 216px;
  z-index: 9;
  transition: all 200ms ease-in-out;

  &.hidden {
    opacity: 0;
    pointer-events: none;
    z-index: -1;
  }

  span {
    position: absolute;
    top: 12px;
    right: 10px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${colors.PRIMARY_COLOR};
    display: flex;

    img {
      margin: auto;
    }
  }

  i {
    position: absolute;
    top: 14px;
    left: 10px;
    width: 30px;
    height: 25px;
    background: rgba(255, 176, 47, 0.56);
    box-shadow: 0 0 40px rgba(204, 204, 204, 0.16);
    border-radius: 10px;
    padding: 3px;
    display: flex;
  }

  img {
    max-width: 18px;
    margin: auto;
  }

  h4 {
    font-size: 16px;
    margin-bottom: 3px;
  }

  p {
    font-size: 12px;
    margin: 0;
    line-height: 16px;

    a {
      color: ${colors.DARK_GRAY_COLOR};
    }
  }
`;

export default NotificationMessage;
