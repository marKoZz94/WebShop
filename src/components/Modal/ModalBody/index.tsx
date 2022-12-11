import styled from 'styled-components';
import colors from '../../../config/colors';

const ModalBody = styled.div`

  h2 {
    font-size: 35px;
    font-weight: 700;

    @media (max-width: 991px) {
      font-size: 26px;
    }

    small {
      display: block;
      font-weight: 400;
      font-size: 16px;
      color: ${colors.TEXT_GRAY};
      margin-top: 12px;
    }
  }

  h3 {
    font-size: 22px;

    @media (max-width: 991px) {
      font-size: 20px;
    }
  }

  p {
    color: ${colors.TEXT_GRAY};
    margin-bottom: 16px;

    a {
      color: ${colors.RED_COLOR};
      text-decoration: underline;
    }
  }

  ul {
    margin-bottom: 20px;

    @media (max-width: 991px) {
      margin-bottom: 16px;
    }
  }

  figure {
    margin-bottom: 20px;
  }

  label {
    font-size: 16px;
    font-weight: 700;
  }
`;

export default ModalBody;
