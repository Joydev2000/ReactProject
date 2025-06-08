import {useContext} from 'react'
import { Link } from 'react-router-dom'
import { context } from '../context/Context'

const Product = () => { 
    const { newcount, setnewcount, data } = useContext(context);
    
    return (
      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <button onClick={() => setnewcount(newcount + 2)} className='w-[60px] bg-slate-600 text-center'>click Me</button>
            <h1>{newcount}</h1>
            <h2 className="text-center text-2xl font-bold mb-7">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {data && data.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`} state={{ product }} className="group">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                  />
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Product
