import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import AboutUs from "./components/aboutUs/AboutUs";
import Clients from "./components/clients/Clients";
import FeaturesSection from "components/features/FeaturesSection";
import Work from "components/work/Work";
import Products from "components/products/Products";
import Testimonials from "components/testimonials/Testimonials";
import Footer from "components/footer/Footer";
function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Header />
      <AboutUs />
      <Clients />
      <FeaturesSection />
      <Work />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
