import * as React from "react";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";
import AutomateSection from "../components/AutomateSection";
import PieSection from "../components/PieSection";
import FooterForm from "../components/FooterForm";
import FAQ from "../components/FAQ";
import SEO from "../components/SEO";
import About from "../components/About";
import SocialCard from "../images/SocialCard.png";

const IndexPage = () => {
  return (
    <main className="font-Lato">
      <SEO
        title="Onedonate"
        keywords={[`onedonate`, `donate`, `donation`, `charity`]}
        image={SocialCard}
      />
      <Header></Header>
      <LandingPage></LandingPage>
      <About />
      <AutomateSection />
      <PieSection />
      <FAQ />
      <FooterForm />
      <Footer></Footer>
    </main>
  );
};

export default IndexPage;
