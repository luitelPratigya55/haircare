import { CountContext } from "@/app/context/countContext";
import { useContext } from 'react';

const C = () => {
    const value=useContext(CountContext);
    
    return (
        <div>
            Component C -count is {value}
        </div>
    )
}

export default C
