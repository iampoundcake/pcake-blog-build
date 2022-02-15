import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>House of Poundcake</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="flex justify-between items-center bg-sky-200 py-10 lg:py-0">
        <div className='px-10 space-y-5'>
          <h1 className='text-5xl max-w-xl font-serif'>
              A log about my journey in dev and the blockchain 🚀
          </h1>
          <h2>
           This is my open invitation to explore, ponder, and learn about about the metaverse through dev, web3, & blockchain technology.
          </h2>
        </div> 

      <img 
      className="hidden md:inline-flex h-32 lg:h-72"
          src="https://i.postimg.cc/LsXWsxjH/pclogo.png" 
          alt=""
      
      />
      </div>
      {/* Posts */}

    </div>
  )
}




