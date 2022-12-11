// Import React
import React, {FC, useCallback} from 'react';
import styled from 'styled-components';
import colors from '../../../config/colors';
import ErrorMessage from '../ErrorMessage';

// Interface Props
interface Props {
  onInputChange: any;
  defaultValue: any,
  placeholder?: string;
  type?: string,
  justRead?: boolean;
  validationMessage?: any,
  label?: string,
  required?: boolean,
}

// Form Input
const Input: FC<Props> = ({defaultValue, placeholder, onInputChange, type, justRead, validationMessage, label, required}) => {

    const handleChangeInputField = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        onInputChange(value);
      },[onInputChange]);

    return (
      <InputWrapper>
        {label ? <label>{label} {required ? <sup>*</sup> : null}</label> : null}
        <input className={label ? 'label' : ''}
          type={type}
          value={defaultValue}
          onChange={handleChangeInputField}
          placeholder={placeholder}
          readOnly={justRead}
        />
        {validationMessage ? <ErrorMessage>{validationMessage}</ErrorMessage> : null}
      </InputWrapper>
    );
}

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;

  input {
    display: block;
    padding: 14px;
    width: 100%;
    font-size: 16px;
    background: ${colors.WHITE_COLOR};
    color: ${colors.BLACK_COLOR};
    border: 1px solid ${colors.GRAY};
    border-radius: 10px;
    transition: all 200ms ease-in-out;
    text-overflow: ellipsis;
    -webkit-appearance: none;
    font-family: 'Monsterrat';
    &.label {
      margin-top: 5px;
    }

    &:focus {
      outline: 1px solid ${colors.SECONDARY_COLOR};
      transition: all 200ms ease-in-out;
      box-shadow: 0px 6px 9px #00000029;
    }

    &::-webkit-input-placeholder {
      color: ${colors.DARK_GRAY_COLOR};
    }

    &:-ms-input-placeholder {
      color: ${colors.DARK_GRAY_COLOR};
    }

    &::placeholder {
      color: ${colors.DARK_GRAY_COLOR};
    }
  }
  sup {
    color: #ff0000;
    font-size: 14px;
    position: relative;
    top: 3px;
  }
`;

export default Input;
