import { CountContext } from "@/app/context/countContext";
import { useContext } from "react";
import B from "./b";

const A = () => {
    const value=useContext(CountContext);

    return (
        <div>
            Component A - count = {value}
            <B/>
        </div>
    )
}

export default A
