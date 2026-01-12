import React from 'react'


import Header from '../components/Header.jsx'
import Steps from '../components/Steps.jsx'
import BgSlide from '../components/BgSlide.jsx'
import Testimonal from '../components/Testimonal.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <BgSlide/>
      <Testimonal/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home