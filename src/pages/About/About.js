import React from "react";
import AboutBanner from "../../components/AboutBanner/AboutBanner";
import AboutEnterprize from "../../components/AboutEnterprize/AboutEnterprize";
import AboutInvestors from "../../components/AboutInvestors/AboutInvestors";
import AboutWhat from "../../components/AboutWhat/AboutWhat";
import Footer from "../../components/Footer/Footer";
import GlobalContact from "../../components/GlobalContact/GlobalContact";
import Navbar from "../../components/Navbar/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <AboutBanner />
      <AboutWhat />
      <AboutEnterprize />
      <AboutInvestors />
      <GlobalContact />
      <Footer />
    </>
  );
}

export default About;
