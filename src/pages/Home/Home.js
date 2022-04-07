import React from 'react'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import HomeIndustries from '../../components/HomeIndustries/HomeIndustries'
import HomeService from '../../components/HomeService/HomeService'

function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeService />
      <HomeIndustries />
    </div>
  )
}

export default Home