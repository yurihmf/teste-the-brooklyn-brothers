import Image from 'next/image'
import React from 'react'
import { IProduct } from '../../types/Product.type'

interface ProductProps {
  product: IProduct
}

const Product:React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center rounded-lg  shadow-lg w-full sm:h-[360px] border border-neutral-400 max-w-sm overflow-hidden animate-slidingToBottom">
      <div className="object-cover w-1/2 h-auto p-2">
        <Image src={product?.images[0]?.asset.url} alt={product?.images[0]?.alt} width='100%' height='100%'layout='responsive'/>
      </div>
      <div className="flex flex-col justify-start w-full h-full p-4 leading-normal bg-neutral-800 ">
          <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">{product?.name}</h5>
          <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{product?.shortDescription}</p>
      </div>
    </div>
  )
}

export default Product