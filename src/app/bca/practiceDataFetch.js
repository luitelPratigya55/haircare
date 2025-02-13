"use client"
import axios from 'axios'
import { useEffect, useState } from 'react'

const PracticeDataFetch = () => {
    const [productData, setProductData] = useState(null)

    const fetchProductData = async() => {
        try {
            const fetchedData =  await axios.get("https://fakestoreapi.com/products/1")
            setProductData(fetchedData.data)
            console.log(fetchedData.data,"success")
            
        } catch (error) {
            throw new error("Data Fetching Failed. !!")
            
        }
    }

    useEffect(() => {
        try {
            fetchProductData()
            
        } catch (error) {
            console.log(error,"error yo")
            
        }
    }, [])

    return (
        <div>
            <h1>Product Data : </h1>
            <div>
                <img src={productData?.image} alt='Image' className='h-[200px] w-[200px]' ></img>
                <h1>id: {productData?.id}</h1>
                <h1>title : {productData?.title}</h1>
                <h1>description : {productData?.description}</h1>
            </div>
        </div>
    )
}

export default PracticeDataFetch
