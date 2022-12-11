import React, {FC} from 'react';
import styled from 'styled-components';
import colors from '../../../config/colors';

interface OptionType { label?: string; value?: string };

interface SelectProps {
  options: any;
  onSelectChange: (value: any) => void;
  value?: any;
  name?: string;
  defaultOption?: string;
  defaultOptionLabel?: string;
  defaultOptionDisabled?: boolean;
  defaultOptionHidden?: boolean;
  multiple?: boolean;
}

const Select: FC<SelectProps> = (props) => {

  const {onSelectChange, options, value, name, defaultOption, defaultOptionLabel, defaultOptionDisabled, defaultOptionHidden, multiple} = props;

  const setValue = (selectedOption: any) => {
    onSelectChange(selectedOption.target.value);
  }

  return (
    <SelectWrapper 
      name={name} 
      onChange={(option) => setValue(option as OptionType)} 
      value={value} 
      multiple={multiple}
    >
      {defaultOptionLabel ?
        <option value={defaultOption} disabled={defaultOptionDisabled} hidden={defaultOptionHidden} >{defaultOptionLabel}</option>
      : <></>
      }
      {
        options.map(function(option: any, i: number){
          return <option value={option} key={i}>{option}</option>
        })
      }
    </SelectWrapper>
      
  )
}

const SelectWrapper = styled.select`
  font-size: 16px;
  position: relative;
  appearance: none;
  max-width: 100%;
  width: 100%;
  padding: 14px;
  margin-bottom: 10px;
  background: ${colors.WHITE_COLOR};
  color: ${colors.BLACK_COLOR};
  border: 1px solid ${colors.BLACK_COLOR};
  border-radius: 10px;
  transition: all 200ms ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Monsterrat';
`;

export default Select;
