import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb 2.0</title>
      </Head>
      <Header />
      <Banner />

      <main className="relative max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("http://localhost:3000/api/explore")
  .then((res)=> res.json())

  return {
    props:{
      exploreData
    }
  }
}
