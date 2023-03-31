import { Circles } from 'react-loader-spinner';

export function Loader() {
    return (
        <Circles
            height="80"
            width="80"
            color="#8BAA36"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    );
}

