import { useEffect } from "react";
import BlogBanner from "../../components/BlogBanner/BlogBanner";
import BlogPosts from "../../components/BlogPosts/BlogPosts";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PortfolioTalk from "../../components/PortfolioTalk/PortfolioTalk";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <BlogBanner />    
      <BlogPosts />
      <PortfolioTalk />
      <Footer />
    </>
  );
}

export default ContactUs;
