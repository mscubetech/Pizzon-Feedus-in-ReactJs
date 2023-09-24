import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import ServiceSection from './Components/Services/ServiceSection';
import FeaturedSection from './Components/Featured/FeaturedSection';
import ManuSection from './Components/Manu/ManuSection';
import SurveySection from './Components/Survey/SurveySection';
import Footer from './Components/Footer';
import ContactSection from './Components/Contact/ContactSection';
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <ManuSection />
      <ServiceSection />
      <SurveySection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
