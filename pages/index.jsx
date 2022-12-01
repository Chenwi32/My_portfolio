import Head from 'next/head'
import HomePage from '../components/homePage'

const Home = () => {
  return (
    < >
      <Head>
        <title>Eugene's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-4xl antialiased" >
        <HomePage />
      </main>
    </>
  )
}

export default Home
