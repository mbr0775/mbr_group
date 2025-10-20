import Image from "next/image";
import Navigation from "./navigation/navigations";
import ServicesCategories from "./Screens/services/services_categories";
import HomeSlideshow from "./home/Homescreen";
import AboutPage from "./about/About";
import InnovationPage from "./innovation/innovation";
import OurBusiness from "./Ourbusiness/Ourbusiness";
import Contact from "./contact/contact"; // Fixed import

export default function Home() {
  return (
    <div>
      <Navigation />
      
      {/* Home Section */}
      <section id="home">
        <HomeSlideshow />
      </section>
      
      {/* About Section */}
      <section id="about">
        <AboutPage />
      </section>
      
      {/* Our Businesses Section */}
      <section id="businesses">
        <OurBusiness />
      </section>
      
      {/* Innovation Section */}
      <section id="innovation">
        <InnovationPage />
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
      
      {/* Services Section (if needed) */}
      <ServicesCategories />
    </div>
  );
}