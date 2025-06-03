import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";
import Events from "@/components/ui/Events";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import Showcase from "@/components/ui/Showcase";
import Testimonial from "@/components/ui/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Showcase />
      <Services />
      <Events />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
