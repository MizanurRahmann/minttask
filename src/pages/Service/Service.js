import React, { useEffect } from "react";
import ServiceBanner from "../../components/ServiceBanner/ServiceBanner";
import ServiceEnterprize from "../../components/ServiceEnterprize/ServiceEnterprize";
import ServiceServices from "../../components/ServiceServices/ServiceServices";
import GlobalWorks from "../../components/GlobalWorks/GlobalWorks";
import ServiceSolution from "../../components/ServiceSolution/ServiceSolution";
import GlobalContact from "../../components/GlobalContact/GlobalContact";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Service() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <>
      <Navbar />
      <ServiceBanner />
      <ServiceServices />
      <ServiceEnterprize />
      <GlobalWorks background={`#fff`} />
      <ServiceSolution />
      <GlobalContact />
      <Footer />
    </>
  );
}

export default Service;
