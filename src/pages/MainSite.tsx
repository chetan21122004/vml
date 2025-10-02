import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Stats from '@/components/Stats';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowWeWork from '@/components/HowWeWork';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const MainSite = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Stats />
      <WhyChooseUs />
      <HowWeWork />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
};

export default MainSite;