import styled from 'styled-components';
import colors from '../../config/colors';

const Table = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  word-break: normal;
  margin-bottom: 6px;

  ::-webkit-scrollbar-track {
      background-color: ${colors.WHITE_COLOR};
  }

  ::-webkit-scrollbar {
     height: 3px;
     background-color: ${colors.WHITE_COLOR};
  }

  ::-webkit-scrollbar-thumb {
     background-color: ${colors.SECONDARY_COLOR};
     -moz-border-radius: 15px;
     -webkit-border-radius: 15px;
     border-radius: 15px;
  }

  table {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    border-collapse: collapse;

    td, th {
      position: relative;
    }

    th {
      border: none;
      font-size: 14px;
      font-weight: 700;
      padding: 10px 6px;
      color: ${colors.TEXT_BLACK};

      &:last-child {
        text-align: center;
      }

      p {
        font-size: 14px;
        font-weight: 400;

        @media (max-width: 767px) {
          font-size: 12px;
        }
      }
    }

    td {
      font-size: 14px;
      color: #5c5c5c;
      padding: 10px 6px;

      big {
        display: block;
        font-size: 18px;
        color: ${colors.TEXT_BLACK};
        margin-bottom: 11px;
      }

      sup {
        color: #ff0000;
        font-size: 14px;
        font-weight: 400;
        position: relative;
        right: -4px;
      }

      img, svg, .isvg {
        width: 20px;
        height: 20px;
        display: block;
        margin: 0 auto;
      }
    }

    tr {
      border-bottom: 1px solid #BDBDBD;
      text-align: left;
    }

    tbody {

      tr {

        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
`;

export default Table;
