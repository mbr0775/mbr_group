import Image from "next/image";
import Navigation from "./navigation/navigations";
import ServicesCategories from "./Screens/services/services_categories";

export default function Home() {
  return (
    <div>
      <Navigation />
      <ServicesCategories />
    </div>
    
  );
}
