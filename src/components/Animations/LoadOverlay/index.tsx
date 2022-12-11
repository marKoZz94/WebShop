import React, { FC } from 'react';
import styled from 'styled-components';
import colors from '../../../config/colors';


const LoadOverlay: FC = (props) => {
  return (
    <Loadaer>
       <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
    </Loadaer>
  )
}

const Loadaer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 66px;
    height: 66px;
    margin: 100px auto;

    span {
      width: 18px;
      height: 18px;
      margin: 2px;
      border-radius: 50%;
      background-color: ${colors.PRIMARY_COLOR};
      float: left;
      -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
      animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;

      &:first-child {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }

      &:nth-child(2) {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
      }

      &:nth-child(3) {
        -webkit-animation-delay: 0.4s;
        animation-delay: 0.4s;
      }

      &:nth-child(4) {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
      }

      &:nth-child(5) {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }

      &:nth-child(6) {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
      }

      &:nth-child(7) {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
      }

      &:nth-child(8) {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
      }

      &:nth-child(9) {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
      }
    }
  }

  @-webkit-keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
    }
  }

@keyframes sk-cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1);
            background: ${colors.BACKGROUND_COLOR};
  }
}
`;

export default LoadOverlay;
