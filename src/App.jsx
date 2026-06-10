import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Services from "./components/services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/gallery";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
export default App;