import { useEffect } from "react";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInvestors from "../../components/ContactInvestors/ContactInvestors";
import ContactMap from "../../components/ContactMap/ContactMap";
import Footer from "../../components/Footer/Footer";
import HomeFeedback from "../../components/HomeFeedback/HomeFeedback";
import Navbar from "../../components/Navbar/Navbar";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <ContactBanner />
      <ContactForm />
      <ContactMap />
      <ContactInvestors />
      <HomeFeedback />
      <Footer />
    </>
  );
}

export default ContactUs;
