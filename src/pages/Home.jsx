import { Helmet } from "react-helmet-async";

import { useEffect } from "react";

import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedProducts from "../components/FeaturedProducts";
import ProjectShowcase from "../components/ProjectShowcase";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


function Home() {
  useEffect(() => {

    const params =
    new URLSearchParams(
    window.location.search
    );

    const target =
    params.get("scroll");

    if(target){

    setTimeout(() => {

    document
    .getElementById(target)
    ?.scrollIntoView({
    behavior:"smooth"
    });

    },200);

    }

  },[]);
  return (
      

    <>
      <Helmet>

        <title>
        Jai Chamunda Furniture
        </title>

        <meta
        name="description"
        content="
        Premium Furniture & Interior Work
        "
        />

      </Helmet>

      <Hero />
      <section id="services">
      <Services />
      </section> 
      <FeaturedProducts />
      <ProjectShowcase />
      <WhyChooseUs />

      <section id="gallery">
      <Gallery />
      </section> 

      <Testimonials/>
      <Stats />
      <FAQ />
      <section id="about">
      <About />
      </section> 

      <section id="contact">
      <Contact />
      </section> 

      <Footer />
    </>
  );
}
export default Home;