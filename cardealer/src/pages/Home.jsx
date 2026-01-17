import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cars from "../components/Cars";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="page-frame">
      <div className="page">
        <Header />
        <Navbar />
        <Hero />
        <Cars />
        <Services />
        <WhyUs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
