
import React, {FC, useCallback} from 'react';
import styled from 'styled-components';
import colors from '../../../config/colors';

// Interface Props
interface Props {
  text?: any;
  onCheckboxChange: (value: any) => void;
  isChecked: boolean | undefined;
  name?: string;
}

const CheckboxLg: FC<Props> = (props) => {

  const {text, isChecked, onCheckboxChange, name} = props;

  const checkboxChange = useCallback((e) => {
    const {checked} = e.target;
    onCheckboxChange(checked);
  },[onCheckboxChange]);

  return (
    <Wrapper>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={checkboxChange}
        name={name}
      />
      <span></span>{text} {/* this is label for checkbox */}
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

  padding-left: 34px;
  min-height: 21px;
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
    border-radius: 5px;
    background-color: ${colors.WHITE_COLOR};
    border: 1px solid #b7b7b7;
    transition: background 100ms ease-in-out;

    &:after {
      content: "";
      position: absolute;
      opacity: 0;
      left: 6px;
      top: 2px;
      width: 6px;
      height: 12px;
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

  a {
    display: flex;
    font-size: 14px;
    color: ${colors.DARK_GRAY_COLOR};

    &:hover {
      color: ${colors.BLACK_COLOR};
    }
  }
`;

export default CheckboxLg;
