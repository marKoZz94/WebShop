import React, {FC, useCallback} from 'react';

import styled from 'styled-components';
import colors from '../../../config/colors';

// Interface Props
interface Props {
  text?: any;
  radioChecked?: any;
  onRadioChange?: any;
  defaultValue?: string;
}

const Radio: FC<Props> = (props) => {

  const {text, onRadioChange, defaultValue, radioChecked} = props;

  const radioChange = useCallback((e) => {
    const {value} = e.target;
    onRadioChange(value);
  },[onRadioChange]);

  return (
    <Wrapper>

      <input
        type="radio"
        value={defaultValue}
        checked={radioChecked === defaultValue}
        onChange={radioChange}
      />

      <span></span>{text} {/* this is label fo radio button */}
    </Wrapper >
  );
}

const Wrapper = styled.label`

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    width: 0;
    height: 0;
  }

  padding-left: 35px;
  margin-bottom: 10px;
  min-height: 20px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  color: ${colors.DARK_GRAY_COLOR};

  &:hover {

    input ~ span {
     background-color: ${colors.WHITE_COLOR};
    }
  }

  span {
    position: absolute;
    left: 0;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: ${colors.WHITE_COLOR};
    border: 1px solid #b7b7b7;
    transition: background 100ms ease-in-out;

    &:after {
      content: "";
      position: absolute;
      opacity: 0;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      margin: -7.5px 0 0 -7.5px;
      background: ${colors.PRIMARY_COLOR};
      transition: opacity 200ms ease-in-out;
    }
  }

  input {

    &:checked ~ span:after {
      opacity: 1;
    }
  }
`;

export default Radio;
