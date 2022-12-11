import styled from 'styled-components';
import colors from '../../config/colors';

const Notification = styled.div`
  padding: 30px;
  background: ${colors.BACKGROUND_COLOR};
  border: 1px solid #A3C4D8;
  border-radius: 8px;
  position: relative;
  margin-bottom: 40px;

  h4 {
    font-size: 16px;
  }

  p {
    font-size: 16px;
    color: ${colors.PRIMARY_COLOR};
    margin: 0;

    span {
      display: block;
    }
  }

  button {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 14px;
    color: ${colors.PRIMARY_COLOR};
    font-size: 15px;
  }
`;

export default Notification;
