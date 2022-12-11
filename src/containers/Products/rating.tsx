import React, {FC} from 'react';
import Ratings from 'react-ratings-declarative';

interface IRating  {
  rate: number | 0;
}

const Rating: FC<IRating> = ({rate}) => {

  return (
    <Ratings
      rating={rate}
      widgetRatedColors="#ffc107"
    >
      <Ratings.Widget widgetDimension="16px" widgetSpacing="1px" widgetHoverColor="#ffc107"/>
      <Ratings.Widget widgetDimension="16px" widgetSpacing="1px" widgetHoverColor="#ffc107"/>
      <Ratings.Widget widgetDimension="16px" widgetSpacing="1px" widgetHoverColor="#ffc107"/>
      <Ratings.Widget widgetDimension="16px" widgetSpacing="1px" widgetHoverColor="#ffc107"/>
      <Ratings.Widget widgetDimension="16px" widgetSpacing="1px" widgetHoverColor="#ffc107"/>
    </Ratings>
  )
}

export default Rating;

