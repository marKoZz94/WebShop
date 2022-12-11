import React, {FC, useCallback} from 'react';

import styled from 'styled-components';
import colors from '../../../../config/colors';

// Interface Props
interface Props {
  text?: any;
  radioChecked?: any;
  onRadioChange?: any;
  defaultValue?: string;
}

const RadioListItem: FC<Props> = (props) => {

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

      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15"><g><g><g><g><g><path fill="#74af23" d="M7.36 13.668a6.308 6.308 0 1 1 6.308-6.308 6.315 6.315 0 0 1-6.308 6.308zM7.36 0a7.36 7.36 0 1 0 7.36 7.36A7.368 7.368 0 0 0 7.36 0z"/></g></g></g><g><g><g><path fill="#74af23" d="M11.398 4.36a.526.526 0 0 0-.73 0L5.783 9.245 4.05 7.514a.526.526 0 1 0-.743.743l2.103 2.103a.526.526 0 0 0 .743 0l5.257-5.257a.526.526 0 0 0-.013-.743z"/></g></g></g></g></g></svg>
        {text}
      </span> {/* this is label fo radio button */}
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

  cursor: pointer;
  user-select: none;

  &:hover {

    input ~ span {
     background-color: ${colors.WHITE_COLOR};
    }
  }

  span {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    color: ${colors.DARK_GRAY_COLOR};
    font-size: 14px;
    font-weight: 400;
    padding: 11px 17px;
    position: relative;
    overflow: hidden;
    background-color: ${colors.WHITE_COLOR};
    box-shadow: 0 0 20px ${colors.TEXT_SHADOW};
    transition: padding 150ms ease-in-out;

    svg, img {
      position: absolute;
      left: -10px;
      margin-right: 8px;
      opacity: 0;
      transition: all 150ms ease-in-out;
    }
  }

  input {

    &:checked ~ span {
      padding: 11px 47px;

      svg, img {
        left: 17px;
        opacity: 1;
      }
    }
  }
`;

export default RadioListItem;
