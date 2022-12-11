import styles from 'styled-components';

const Col = styles.div`
    flex-basis: 0;
    flex-grow: 1;
    min-width: 0;
    max-width: 100%;
    position: relative;
    width: 100%;
    padding: 0 15px;
`;

export default Col;
