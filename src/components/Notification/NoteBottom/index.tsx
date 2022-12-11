import styled from 'styled-components';
import colors from '../../../config/colors';

const NoteBottom = styled.div`
  background: ${colors.BACKGROUND_COLOR};
  padding: 12px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;

  h4 {
    font-size: 28px;
    font-weight: 400;
    margin: 0;
  }

  a {
    font-size: 22px;
    font-weight: 700;
    padding: 20px 30px;
    width: 260px;
  }
`;

export default NoteBottom;
