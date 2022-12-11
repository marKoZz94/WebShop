import styled from 'styled-components';
import colors from '../../config/colors';

const Dropdown = styled.div`
  position: relative;
  z-index: 2;

  span, > a {
    display: block;
    position: relative;
    cursor: pointer;
  }

  img {
    max-width: 30px;
  }

  .scrollbar {
    position: absolute !important;
    width: 200px !important;
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
    transition: all 200ms ease-in-out;
    background: ${colors.WHITE_COLOR};
    box-shadow: 0 0 20px ${colors.TEXT_SHADOW};
    border-radius: 10px;
    top: 100%;
    right: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    a {
      display: block;
      margin: 0;
      padding: 4px 10px;
      font-size: 13px;
      color: ${colors.BLACK_COLOR};

      &:hover {
        background: rgba(255, 175, 46, 0.14);
      }
    }
  }

  &.dropdownOpen {

    .scrollbar {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }
  }
`;

export default Dropdown;
