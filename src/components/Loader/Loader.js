import { Circles } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height="80"
    margin-top: 30px;
    margin-bottom: 30px;

    @media screen and (min-width: 768px) {
        height="120"
        margin-top: 50px;
        margin-bottom: 50px;
    }

    @media screen and (min-width: 768px) {
        height="150"
        margin-top: 70px;
        margin-bottom: 70px;
    }
`;

export const Loader = () => (
    <LoaderWrapper>
        <Circles
        height={80}
        width={80}
        color="#8BAA36"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
    />
    </LoaderWrapper>
);

