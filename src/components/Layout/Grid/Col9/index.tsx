import styles from 'styled-components';

const Col9 = styles.div`
    flex: 0 0 75%;
    max-width: 75%;
    position: relative;
    width: 100%;
    padding: 0 15px;
    @media (max-width: 992px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`;

export default Col9;
