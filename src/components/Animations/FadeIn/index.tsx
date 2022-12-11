import styled from 'styled-components';

const FadeIn = styled.div`
  animation-duration: 1000ms;
  animation-timing-function: ease;
  animation-name: fadeIn;

  @keyframes fadeIn {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
       }
   }
`;

export default FadeIn;
