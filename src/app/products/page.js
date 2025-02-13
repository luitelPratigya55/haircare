import Product from '@/components/product';
import { productList } from '../data';


const Page = () => {
  return (
    <div className='grid grid-cols-5 gap-8'>
      {
        productList.products.map((element)=>(
            <Product key={element.id} image={element.thumbnail} title={element.title} price={element.price} />
        ))
      }
    </div>
  )
}

export default Page
