import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedProparties from '../../components/featuredproparities/FeaturedProparties'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Maillist from '../../components/maillist/Maillist'
import Navbar from '../../components/navbar/Navbar'
import Property from '../../components/property/Property'
import"./home.css"
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
          <Featured /> 
          <h1 className='hometitle'> Browse by property type</h1>
          <Property/>
          <h1 className='hometitle'>Homes guests love</h1>
          <FeaturedProparties /> 
          <Maillist />
          <Footer /> 
        </div>
    </div>
  )
}

export default Home