import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import CallToAction from '../components/MainPage/calltoaction'
import ContentOffering from '../components/MainPage/content-offer'
import Footer from '../components/MainPage/footer'
import HeaderBar from '../components/MainPage/HeaderBar'
import LiveBets from '../components/MainPage/livebets'
import NavigationBar from '../components/MainPage/navigation'

const Home: NextPage = () => {
  return (
    <>
  <div className="bg-[#1A2C38] ">
    <HeaderBar />
    <div className="flex">
      <NavigationBar />
      <div>
       {/*main section */}
       <CallToAction />
       <ContentOffering />
       <LiveBets />
       <Footer />
     </div>
    </div>
  </div>
    </>
  )
}

export default Home
