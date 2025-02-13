import axios from 'axios';
import { useEffect, useState } from 'react';
//hooks can only be called inside function component
const DataFetch = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);  // corrected
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/1")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);  // corrected

    return (
        <div>
            DataFetch
            <button onClick={() => { setCount(count + 1) }}>
                {count} Increase
            </button>

            {error && <div>Error: {error.message}</div>}

            {data && ( //if data is not null display this div
                <div>
                    <h2>Product Details:</h2>
                    <p>Title: {data.title}</p>
                    <p>Price: ${data.price}</p>
                    <p>Description: {data.description}</p>
                </div>
            )}
        </div>
    );
};

export default DataFetch;