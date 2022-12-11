import React, {FC, memo} from 'react';
import ReactDatePicker from 'react-datepicker';

// Import Style
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  defaultValue?: any
  handleChangeDate: (content: any) => void
  dateFormat?: string;
  [x:string]: any;
}

const DatePick: FC<Props> = (props) => {

    const {defaultValue, handleChangeDate, dateFormat, ...otherProps} = props;

    const handleChange = (date: Date) => {
     
      handleChangeDate(date);
    }

    return (
        <ReactDatePicker
            className="input input--primary"
            dateFormat={dateFormat}
            selected={defaultValue}
            onChange={handleChange}
            {...otherProps}
        />
    );
}


export default memo(DatePick);
