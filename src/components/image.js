"use client";
import { useState } from "react";

const Imagecity =()=>{

    let [source,setSource]=useState("https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2019/02/06/3a21faa6-2052-11e9-9b66-f8d7b487d426_image_hires_164133.jpg?itok=DO1RMD-2&v=1549442505")

    const KtmSet =()=>{
        
        setSource("https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=600")

    }
    const ltrSet =()=>{
        
        setSource("https://images.pexels.com/photos/4028822/pexels-photo-4028822.jpeg?auto=compress&cs=tinysrgb&w=600")

    }
    const bkrSet =()=>{
        
        setSource("https://images.pexels.com/photos/30370364/pexels-photo-30370364/free-photo-of-picturesque-bhaktapur-at-sunset-reflected-in-water.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")

    }
    return (
        <div>
            <h1>Image of City</h1>
            <img  className=" h-[400px] w-[400px]" src={source}/>
            <button className="bg-red-400 p-2 m-2 text-white" onClick={KtmSet}>ktm</button>
            <button className="bg-red-400 p-2 m-2 text-white" onClick={ltrSet}>Ltr</button>
            <button className="bg-red-400 p-2 m-2 text-white" onClick={bkrSet}>Bkr</button>
        </div>

    );
}
export default Imagecity;