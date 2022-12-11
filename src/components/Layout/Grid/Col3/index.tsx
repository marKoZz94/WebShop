import styles from 'styled-components';

const Col3 = styles.div`
    flex: 0 0 25%;
    max-width: 25%;
    position: relative;
    width: 100%;
    padding: 0 15px;
    @media (max-width: 768px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`;

export default Col3;
