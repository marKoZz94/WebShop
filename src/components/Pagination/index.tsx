import styled from 'styled-components';
import colors from '../../config/colors';

const Pagination = styled.div`
 .pagination {
    list-style: none;
    padding: 0;
    margin: 20px 0;
    text-align: center;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    z-index: 1;

    @media (max-width: 576px) {
      margin: 14px 0;
    }

    li {
      display: inline-block;

      a {
        width: 38px;
        height: 38px;
        color: ${colors.SECONDARY_COLOR};
        border: 1px solid ${colors.GRAY};
        background: ${colors.GRAY};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin: 3px;
        transition: all 100ms ease-in-out;

        @media (max-width: 576px) {
          width: 24px;
          height: 24px;
          font-size: 12px;
          margin: 2px;
        }
      }

      svg {
        width: 7px;
        height: 12px;
        color: ${colors.BLACK_COLOR};
        stroke: ${colors.BLACK_COLOR};
        transition: all 100ms ease-in-out;

        @media (max-width: 576px) {
          width: 6px;
          height: 10px;
        }
      }

      &.active,
      &:hover {

        a {
          background: ${colors.SECONDARY_COLOR};
          color: ${colors.WHITE};
        }
        svg {
          fill: ${colors.WHITE};
          color: ${colors.WHITE};
          stroke: ${colors.WHITE};
        }
      }
    }
  }
`
export default Pagination;
