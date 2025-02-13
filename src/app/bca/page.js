"use client";

import PracticeDataFetch from "./practiceDataFetch";

// const addData = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(2===2){
//             resolve("Success Comparison")
//         }else{
//             reject("Unsuccessful Comparison")
//         }
    
//     },5000);
// })



// addData.then((value)=>{
//     console.log(value,"Resolved value success!!")

// }).catch((error)=>{
//     console.log(error,"Rejected Value : ")

// })

const PromisePage = () => {
    return (
        <div>
            <PracticeDataFetch />
        </div>
    )
}

export default PromisePage


