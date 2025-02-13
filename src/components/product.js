
const Product = ({image,title,price}) => {
  const newPrice=`Rs. ${price} /-`
  return (
    <div>
        <img src={image} className='h-[200px] w-[100px]'></img>
        <h1>{title}</h1>
        <p>{newPrice}</p>
    </div>
  )
}

export default Product
