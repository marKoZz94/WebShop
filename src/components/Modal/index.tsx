import styled from 'styled-components';
import colors from '../../config/colors';

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: all 250ms ease-in-out;
  display: flex;
  padding: 80px 15px;
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  &.modalOpen {
    z-index: 9999;
    opacity: 1;
    visibility: visible;
    overflow-x: hidden;
    overflow-y: auto;
    padding-right: 15px;
    pointer-events: auto;

    > div {
      transform: translateY(-50%);
    }
  }
`;

const ModalRight = styled.div`
  position: fixed;
  top: 0;
  right: -557px;
  bottom: 0;
  /* visibility: hidden; */
  z-index: 1001;
  width: 557px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.WHITE};
  box-shadow: 0 2px 14px 3px rgba(0,0,0,0.1);
  transition: all 500ms ease-in-out;
  padding: 40px;
  overflow-y: scroll;

  @media (max-width: 576px) {
    padding: 40px 15px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: 100px 100px;
    height: 100px;
    width: 100px;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 100px;
    right: 30px;
    background-repeat: no-repeat;
    width: 91px;
    height: 69px;
    z-index: -1;
  }

  &.showModal {
    right: 0;
    /* visibility: visible; */

    .modalBackdrop {
      opacity: 1;
      z-index: 999;
      pointer-events: auto;
      transition: all 300ms ease-in-out 400ms;
    }
  }
`;

const ModalClose = styled.span`
  position: absolute;
  top: 40px;
  right: 40px;
  cursor: pointer;
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ModalInfo = styled.div`
  margin: 50px 0 auto;
  p {
    margin-bottom: 20px;
  }
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 557px;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  pointer-events: none;
  background: rgba(0,0,0,0.3);
  transition: all 100ms ease-in-out;
`;

const ModalBtns = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  button {
    margin: 0 16px 12px 0;

    @media (max-width: 576px) {
      width: 100%;
    }
  }
`;

export {
  Modal,
  ModalRight,
  ModalClose,
  BackDrop,
  ModalInfo,
  ModalBtns
}
