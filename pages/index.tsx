import type { NextPage } from 'next'
import Head from 'next/head'
import Promotion from '../components/promotion/promotion'

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alma</title>
      </Head>
      <h1>Home Page</h1>
      <Promotion />
    </div>
  )
}

export default HomePage
