import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '../components/Hero/hero'
import Method from '../components/Method/method'
import Testimonials from '../components/Testimonials/testimonials'
import Plans from '../components/Plans/plans'
import Footer from '../components/Footer/footer'
import Offer from '../components/Offer/offer'
/*import style from '../styles/Evernote.module.scss'
import NoteOperations from '../components/NoteOperations'
import NoteDetails from '../components/NoteDetails'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })*/

export default function Home() {

  /*const [ID, setID] = useState(null);
  
  const getSingleNote = (id) => {

    setID(id)

  }*/

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Thogt School" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div id='hero' className='
          bg-white pl-[20px] pr-[20px]
          lg:pl-24 lg:pr-40'>
          <Hero/>
        </div>
        <div id="metodo" className='
          bg-white px-[40px]
          lg:pl-24 lg:pr-20 lg:pt-24'>
          <Method/>
        </div>
        <div id='depo' className='
          bg-white
          lg:pl-14 lg:pr-14 lg:pt-20'>
          <Testimonials/>
        </div>

        <div id='plans' className='
          bg-white px-[40px]
          lg:pl-24 lg:pr-24 lg:pt-0'>
          <Plans/>
        </div>

        <div  className='
          bg-white px-[40px] pb-20
          lg:pl-24 lg:pr-24 lg:pb-8 lg:pt-10'>
            <Offer/>
        </div>
        
        <div className='
          bg-slate-100 pb-10
          lg:pl-24 lg:pr-24'>
            <Footer/>
        </div>
      </main>
      
    </>
  )

  /*
      <div className='
          bg-white px-[40px]
          lg:pl-[120px] lg:pr-[120px]'>
          <Testimonials/>
        </div>

        <div className='
          bg-white px-[40px]
          lg:pl-[120px] lg:pr-[120px]'>
          <Plans/>
        </div>
        
        <div className='
          bg-blue-900 px-[40px]
          lg:pl-[120px] lg:pr-[120px]'>
            <Offer/>
        </div>
      </div>

  */

}
