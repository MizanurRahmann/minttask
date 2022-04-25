import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import GlobalContact from "../../components/GlobalContact/GlobalContact";
import GlobalIndustries from "../../components/GlobalIndestries/GlobalIndustries";
import GlobalWorks from "../../components/GlobalWorks/GlobalWorks";
import HomeAchievements from "../../components/HomeAchievements/HomeAchievements";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeClients from "../../components/HomeClients/HomeClients";
import HomeFeedback from "../../components/HomeFeedback/HomeFeedback";
import HomeService from "../../components/HomeService/HomeService";
import Navbar from "../../components/Navbar/Navbar";

import { Data } from "./IndustrySlideData";

function Home() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);


  return (
    <>
      <Navbar />
      <HomeBanner />
      <HomeService />
      <GlobalIndustries data={Data} />
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
