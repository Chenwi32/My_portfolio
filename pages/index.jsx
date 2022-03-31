import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/homePage'

const Home = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Eugene's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto  max-w-4xl antialiased">
        <HomePage />
      </main>
    </div>
  )
}

export default Home
