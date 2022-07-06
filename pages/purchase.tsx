import { NextPage } from "next"
import Head from "next/head"

import { ProductType, Products } from '../components/products'

const PurchasePage : NextPage = () => {
    const products: ProductType[] = [
      {
        name: 'Apple',
        amount: 0,
        price: 1
      },
      {
        name: 'Pear',
        amount: 0,
        price: 2
      }
      ,{
        name: 'Rice',
        amount: 0,
        price: 5
      }]

    return (
      <>
        <Head>
          <title>Alma - Purchase</title>
        </Head>
        <div>
          <h1>What do you want to buy?</h1>
          <Products products={products} />
        </div>
      </>
    )
  }
  
  export default PurchasePage