import React, { FC } from 'react';
import styled from 'styled-components';
import colors from '../../../config/colors';

const LoadFadingCircleButton: FC = () => {
  return (
    <Loader>
      <label>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
       </label>
    </Loader>
  )
}

const Loader = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    width: 26px;
    height: 26px;
    position: relative;
    display: inline-block;

    span {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;

      &:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: ${colors.BLACK_COLOR};
        border-radius: 100%;
        -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
        animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
      }

      &:nth-child(2) {
        -webkit-transform: rotate(30deg);
            -ms-transform: rotate(30deg);
                transform: rotate(30deg);

        &:before {
          -webkit-animation-delay: -1.1s;
                  animation-delay: -1.1s;
        }
      }

      &:nth-child(3) {
        -webkit-transform: rotate(60deg);
            -ms-transform: rotate(60deg);
                transform: rotate(60deg);

        &:before {
          -webkit-animation-delay: -1s;
                  animation-delay: -1s;
        }
      }

      &:nth-child(4) {
        -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
                transform: rotate(90deg);

        &:before {
          -webkit-animation-delay: -0.9s;
                  animation-delay: -0.9s;
        }
      }

      &:nth-child(5) {
        -webkit-transform: rotate(120deg);
            -ms-transform: rotate(120deg);
                transform: rotate(120deg);

        &:before {
          -webkit-animation-delay: -0.8s;
                  animation-delay: -0.8s;
        }
      }

      &:nth-child(6) {
        -webkit-transform: rotate(150deg);
            -ms-transform: rotate(150deg);
                transform: rotate(150deg);

        &:before {
          -webkit-animation-delay: -0.7s;
                  animation-delay: -0.7s;
        }
      }

      &:nth-child(7) {
        -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
                transform: rotate(180deg);

        &:before {
          -webkit-animation-delay: -0.6s;
                  animation-delay: -0.6s;
        }
      }

      &:nth-child(8) {
        -webkit-transform: rotate(210deg);
            -ms-transform: rotate(210deg);
                transform: rotate(210deg);

        &:before {
          -webkit-animation-delay: -0.5s;
                  animation-delay: -0.5s;
        }
      }

      &:nth-child(9) {
        -webkit-transform: rotate(240deg);
            -ms-transform: rotate(240deg);
                transform: rotate(240deg);

        &:before {
          -webkit-animation-delay: -0.4s;
                  animation-delay: -0.4s;
        }
      }

      &:nth-child(10) {
        -webkit-transform: rotate(270deg);
            -ms-transform: rotate(270deg);
                transform: rotate(270deg);

        &:before {
          -webkit-animation-delay: -0.3s;
                  animation-delay: -0.3s;
        }
      }

      &:nth-child(11) {
        -webkit-transform: rotate(300deg);
            -ms-transform: rotate(300deg);
                transform: rotate(300deg);

        &:before {
          -webkit-animation-delay: -0.2s;
                  animation-delay: -0.2s;
        }
      }

      &:nth-child(12) {
        -webkit-transform: rotate(330deg);
            -ms-transform: rotate(330deg);
                transform: rotate(330deg);

        &:before {
          -webkit-animation-delay: -0.1s;
                  animation-delay: -0.1s;
        }
      }
    }

    @-webkit-keyframes sk-circleFadeDelay {
      0%, 39%, 100% { opacity: 0; }
      40% { opacity: 1; }
    }

    @keyframes sk-circleFadeDelay {
      0%, 39%, 100% { opacity: 0; }
      40% { opacity: 1; }
    }
  }
`;

export default LoadFadingCircleButton;
