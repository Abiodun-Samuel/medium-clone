import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel='icon' href="/favicon.ico" />
      </Head>

      <Header />
      
      <div className='flex justify-between items-center bg-yellow-400 border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'> <span className=''>Stay curious.</span></h1>
          <h2>Discover stories, thinking, and expertise from writers on any topic.</h2>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Home
