import React, { FC, useCallback, memo } from 'react';

import styled from 'styled-components';
import colors from '../../../config/colors';


interface Props {
  theme?: string;
  placeholder?: string,
  rows?: number,
  defaultValue?: string,
  onChange: (content: any) => void
}


const Textarea: FC<Props> = ({placeholder, rows, onChange, defaultValue, theme}) => {

  const onTextAreaChange = useCallback((e)=>{
    onChange(e.target.value);
  }, [onChange])




  return (
      <TextareaStandard className={theme === 'white' ? 'whiteBg' : ''}
        placeholder={placeholder}
        onChange={onTextAreaChange}
        value={defaultValue}
        rows={rows}
      >

      </TextareaStandard>
  )

};

const TextareaStandard = styled.textarea`
  display: block;
  width: 100%;
  /* padding: 16px 14px 10px 14px;
  background-color: white;
  border-radius: 3px;
  font-size: 16px;
  color: black; */
  transition: all 200ms ease-in-out;
  -webkit-appearance: none;
  resize: none;
  padding: 15px 20px;
  color: #707070;
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #A7A9AC;
  border-radius: 5px;
  font-family: 'Tahoma';
  font-size: $base-font-size;
  font-size: 16px;
  
  @supports (-webkit-touch-callout: none) {

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  &:focus {
    outline: none;
  }

  &::-webkit-input-placeholder {
    color: gray;
  }

  &:-ms-input-placeholder {
    color: gray;
  }

  &::placeholder {
    color: gray;
  }

  &.whiteBg {

    textarea {
      background-color: ${colors.WHITE};
    }
  }
`;

export default memo(Textarea);
