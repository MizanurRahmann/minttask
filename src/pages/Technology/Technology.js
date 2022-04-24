import { useEffect } from "react";
import { data } from "../../components/TechnologyTech/Data";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TechnologyBanner from "../../components/TechnologyBanner/TechnologyBanner";
import TechnologyDetail from "../../components/TechnologyDetail/TechnologyDetail";
import TechnologyTech from "../../components/TechnologyTech/TechnologyTech";
import PortfolioTalk from '../../components/PortfolioTalk/PortfolioTalk';

function Technology() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <TechnologyBanner />
      <TechnologyDetail />
      { data.map(tech => <TechnologyTech key={tech.id} tech={tech} />)}
      <PortfolioTalk />
      <Footer />
    </>
  );
}

export default Technology;
