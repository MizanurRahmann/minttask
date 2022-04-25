import { useEffect } from "react";
// Components
import Footer from "../../components/Footer/Footer";
import GlobalIndustries from "../../components/GlobalIndestries/GlobalIndustries";
import GlobalContact from "../../components/GlobalContact/GlobalContact";
import HireBanner from "../../components/HireBanner/HireBanner";
import HireService from "../../components/HireService/HireService";
import Navbar from "../../components/Navbar/Navbar";

import {Data} from "./DrivingEnterprizeData";
import HireClients from "../../components/HireClients/HireClients";
import HireExperience from "../../components/HireExperience/HireExperience";

function Hire() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <HireBanner />
      <HireService />
      <GlobalIndustries data={Data} />
      <HireClients />
      <HireExperience />
      <GlobalContact />
      <Footer />
    </>
  );
}

export default Hire;
