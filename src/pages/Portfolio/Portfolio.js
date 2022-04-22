import React, { useEffect } from 'react'
import PorfolioAproject from '../../components/PorfolioAproject/PorfolioAproject'
import PortfolioBanner from '../../components/PortfolioBanner/PortfolioBanner'
import PortfolioClients from '../../components/PortfolioClients/PortfolioClients'
import PortfolioHighlight from '../../components/PortfolioHighlight/PortfolioHighlight'
import PortfolioProjects from '../../components/PortfolioProjects/PortfolioProjects'
import HomeFeedback from "../../components/HomeFeedback/HomeFeedback"
import Footer from "../../components/Footer/Footer";
import PortfolioTalk from '../../components/PortfolioTalk/PortfolioTalk'
import Navbar from '../../components/Navbar/Navbar'

function Portfolio() {
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
        <Navbar />
        <PortfolioBanner />
        <PortfolioClients />
        <PorfolioAproject />
        <PortfolioProjects />
        <PortfolioHighlight />
        <HomeFeedback />
        <PortfolioTalk />
        <Footer />
    </>
  )
}

export default Portfolio