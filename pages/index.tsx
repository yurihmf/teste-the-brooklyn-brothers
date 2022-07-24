import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Products from '../components/Products'
import { IProduct } from '../components/types/Product.type'
import { getAllProducts } from '../services/getAllProducts'

interface HomeProps{ 
  products: IProduct[]
}

const Home: NextPage<HomeProps> = ({ products }) => {
  
  return (
    <>
      <Head>
        <title>Teste - The Brooklyn Brothers</title>
        <meta name="description" content="Desafio " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mx-auto container font-primary flex flex-col justify-center py-6 px-2'>
        <h1 className='font-semibold text-3xl text-center'>
         Produtos <span className='font-bold text-blue-900'>Rexona ✓</span> 
        </h1>
         <Products products={products}/>
      </main>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const response = await getAllProducts()
  const products = response?.data.record.data.nodes
  
  return {
    props: {
      products
    }
  }
}

export default Home
