import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import GlobalContact from "../../components/GlobalContact/GlobalContact";
import GlobalWorks from "../../components/GlobalWorks/GlobalWorks";
import HomeAchievements from "../../components/HomeAchievements/HomeAchievements";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeClients from "../../components/HomeClients/HomeClients";
import HomeFeedback from "../../components/HomeFeedback/HomeFeedback";
import HomeIndustries from "../../components/HomeIndustries/HomeIndustries";
import HomeService from "../../components/HomeService/HomeService";
import Navbar from "../../components/Navbar/Navbar";

function Home() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);


  return (
    <>
      <Navbar />
      <HomeBanner />
      <HomeService />
      <HomeIndustries />
      <HomeClients />
      <GlobalWorks background={`#E5E5E5`} />
      <HomeAchievements />
      <HomeFeedback />
      <GlobalContact />
      <Footer />
    </>
  );
}

export default Home;
