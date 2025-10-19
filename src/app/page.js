import Image from "next/image";
import Navigation from "./navigation/navigations";
import ServicesCategories from "./Screens/services/services_categories";
import HomeSlideshow from "./home/Homescreen";
import AboutPage from "./about/About";
import InnovationPage from "./innovation/innovation";
import OurBusiness from "./Ourbusiness/Ourbusiness";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HomeSlideshow />
      <OurBusiness />
      <AboutPage />
      <InnovationPage />
      <ServicesCategories />

    </div>
    
  );
}
