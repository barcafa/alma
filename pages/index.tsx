import type { NextPage } from 'next'
import Head from 'next/head'
import Promotion from '../components/promotion/promotion'

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alma</title>
      </Head>
        <Promotion />      
    </div>
  )
}

export default HomePage
