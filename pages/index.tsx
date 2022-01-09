import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Dead Rabbits</title>
      </Head>

      <main className="w-">
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-slate-600 font-semibold text-2xl leading-6">Hi Dead Rabbits</h1>
        </div>
      </main>
    </div>
  )
}

export default Home
