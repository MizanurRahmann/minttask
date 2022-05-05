import React, { useEffect } from "react";
import CareerBanner from "../../components/Career/CareerBanner/CareerBanner";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function Career() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);


  return (
    <>
      <Navbar />
      <CareerBanner />
      <Footer />
    </>
  );
}

export default Career;
