"use client";

import { useContext, useState } from 'react';
import { CountContext } from '.././context/countContext';
import { ThemeContext } from '../context/themecontext';
import A from './components/a';

const GlobalState = () => {
    const [count, setCount] = useState(0)
    const mode=useContext(ThemeContext);

    const increment = () => {
        setCount(count + 1)
    }
    return (

        <div className={mode=="light"?"bg-white text-black":"bg-gray-700 text-white"}>
            <p>Global State Page- count is {count}</p>
            <button className='bg-red-400 text-white mx-4 p-2' onClick={increment}>Increment</button>
            <CountContext.Provider value={count} >
                <A/>
            </CountContext.Provider>
        
        </div>
    )
}

export default GlobalState
