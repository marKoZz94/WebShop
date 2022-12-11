import styled from 'styled-components';
import colors from '../../../../config/colors';

const SwitchSlide = styled.label`
  display: flex;
  align-items: center;
  margin: 0;

  i {
    position: relative;
    cursor: pointer;
    background-color: ${colors.WHITE_COLOR};
    border: 1px solid rgba(107, 107, 107, 0.4);
    transition: all 300ms ease;
    border-radius: 17px;
    width: 50px;
    height: 28px;

    &:before {
      content: "";
      position: absolute;
      left: 4px;
      top: 2px;
      background-color: rgba(107, 107, 107, 0.4);
      width: 22px;
      height: 22px;
      transition: all 300ms ease;
      border-radius: 50%;
    }
  }

  input {
    display: none;

    &:checked ~ i {
      background: ${colors.WHITE_COLOR};

      &:before {
        transform: translateX(19px);
        background: ${colors.PRIMARY_COLOR};
      }
    }
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${colors.PRIMARY_COLOR};
    margin-right: 10px;
  }
`;

export default SwitchSlide;
