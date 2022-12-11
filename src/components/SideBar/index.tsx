import styled from 'styled-components';

const SideBar = styled.div`
  position: fixed;
  top: 0;
  right: -700px;
  bottom: 0;
  visibility: hidden;
  z-index: 9999;
  width: 700px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 2px 14px 3px rgba(0,0,0,0.1);
  transition: all 100ms ease;

  &.showModal {
    right: 0;
    visibility: visible;

    .modalBackdrop {
      opacity: 1;
      z-index: 1000;
      pointer-events: auto;
      transition: all 300ms ease-in-out 400ms;
    }
  }
`;

const SideBarInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1001;
  background: #fff;
`;

const SideBarHeader = styled.div`
  padding: 21px 26px;
  background: #a6a6a6;
  border-bottom: 1px solid #E2E2E2;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 20px;
    margin: 0;
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 10px;
  }
`;

const SideBarHeaderCV = styled.div`
  padding: 21px 26px;
  background: #a6a6a6;
  border-bottom: 1px solid #E2E2E2;
  position: relative;
  display: flex;
  align-items: center;

  h3 {
    font-size: 20px;
    margin: 0;
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 10px;
  }
`;

const SideBarClose = styled.span`
  position: absolute;
  top: 50%;
  margin-top: -6px;
  right: 16px;
  cursor: pointer;
  line-height: 0;

  img, .isvg {
    width: 12px;
    height: 12px;
  }
`;

const SideBarContent = styled.div``;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  z-index: -1;
  pointer-events: none;
  background: rgba(0,0,0,0.3);
  transition: all 100ms ease-in-out;
`;

export {
  SideBar,
  SideBarInner,
  SideBarHeader,
  SideBarHeaderCV,
  SideBarClose,
  SideBarContent,
  BackDrop
};
