import styled from 'styled-components';
import colors from '../../../config/colors';

const NotificationNumber = styled.i`
  width: 16px;
  height: 16px;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 1);
  position: absolute;
  top: -5px;
  right: -5px;
  background: ${colors.SECONDARY_COLOR};
  font-family: 'Montserrat';
  border-radius: 50%;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  line-height: 16px;
  color: ${colors.WHITE_COLOR};
`;

export default NotificationNumber;
