import styles from 'styled-components';

const Col6 = styles.div`
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    padding: 0 15px;
    @media (max-width: 768px) {
        flex: 0 0 100%;
        max-width: 100%;
    }
`;

export default Col6;
