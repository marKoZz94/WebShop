import styled from 'styled-components';
import colors from '../../../config/colors';

const Checkbox = styled.label`

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 0;
    height: 0;
  }

  padding-left: 20px;
  min-height: 12px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 12px;
  color: ${colors.DARK_GRAY_COLOR};

  &:hover {

    input ~ span {
     background-color: ${colors.WHITE_COLOR};
    }
  }

  span {
    position: absolute;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 2px;
    background-color: ${colors.WHITE_COLOR};
    border: 1px solid #707070;
    transition: background 100ms ease-in-out;

    &:after {
      content: "";
      position: absolute;
      opacity: 0;
      left: 3px;
      top: 1px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      transition: opacity 200ms ease-in-out;
    }
  }

  input {

    &:checked ~ span {
      background-color: ${colors.DARK_GRAY_COLOR};
      border-color: ${colors.DARK_GRAY_COLOR};
    }

    &:checked ~ span:after {
      opacity: 1;
    }
  }
`;

export default Checkbox;
