//This file is for making a radio button functionality
import React, {FC, useCallback} from 'react';

import styled from 'styled-components';
import colors from '../../../config/colors';

// Interface Props
interface Props {
  text?: any;
  radioChecked: string;
  onRadioChange: (value: any) => void;
  defaultValue: string;
  name?: string
}

const Radio: FC<Props> = (props) => {

  const {text, onRadioChange, defaultValue, radioChecked, name} = props;

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
        name={name}
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

  padding-left: 30px;
  min-height: 20px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  color: ${colors.PRIMARY_COLOR};

  &:hover {

    input ~ span {
     background-color: ${colors.WHITE_COLOR};
    }
  }

  span {
    position: absolute;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${colors.WHITE_COLOR};
    border: 1px solid ${colors.PRIMARY_COLOR};
    transition: background 100ms ease-in-out;

    &:after {
      content: "";
      position: absolute;
      opacity: 0;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      margin: -5px 0 0 -5px;
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
