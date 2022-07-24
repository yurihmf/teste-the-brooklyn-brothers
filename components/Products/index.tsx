import React, { useEffect, useState } from 'react'
import { IProduct } from '../types/Product.type'
import Product from './Product'

interface ProductsProps{
  products: IProduct[]
}

const readCategories = (products: IProduct[]): string[] => {
  const duplicateCategories = products.map(product => product.category.name)
  const uniqueCategories = [...new Set(duplicateCategories)]
  return uniqueCategories
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const [productsList, setproductsList] = useState<IProduct[]>(products)
  const [categories, setCategories] = useState<string[]>(readCategories(products))
  const [categorySelected, setCategorySelected] = useState<string>('Todas')

  useEffect(() => {
    if(categorySelected == 'Todas'){
      setproductsList(products)
    } else {
      const filteredProducts = products?.filter((product) => product.category.name.toLocaleLowerCase().includes(categorySelected.toLocaleLowerCase()))
      setproductsList(filteredProducts)
    }
  }, [categorySelected, products])

  return (
    <section className="py-6 flex flex-col w-full">
        <div className="w-full mb-6">
          <label htmlFor="categories" className="block mb-1 text-sm font-medium text-neutral-900">Categorias</label>
          <select id="categories" className="border border-neutral-900 text-lg px-2 py-1 rounded-lg w-full max-w-[375px] sm:max-w-[200px] cursor-pointer" onChange={(e) => setCategorySelected(e.target.value)}>
            <option defaultValue='Todas'>Todas</option>
            {categories?.map(category => (<option key={category}>{category}</option>))}
          </select>
        </div>
        <span className='text-neutral-400 font-medium text-sm'>{productsList.length} Resultados</span>
        <div className="w-full flex flex-col gap-2 py-4 px-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-y-6 lg:gap-x-4 items-center">
          {productsList.map(product => (<Product product={product} key={product.id}/>))}
        </div>
    </section>
  )
}

export default Products