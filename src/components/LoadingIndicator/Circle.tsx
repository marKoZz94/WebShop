import React from 'react';
import styled from 'styled-components';

const Circle = (props: any) => {
  //needs spiner
  return <CirclePrimitive {...props} />;
};

const CirclePrimitive = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  `;

export default Circle;
