import About from "@/components/ui/About";
import Declaration from "@/components/ui/Declaration";
import Branches from "@/components/ui/Branches";
import Contact from "@/components/ui/Contact";
import Events from "@/components/ui/Events";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import MonthlyEvents from "@/components/ui/MonthlyEvents";
import Quote from "@/components/ui/Quote";
import Services from "@/components/ui/Services";
import Showcase from "@/components/ui/Showcase";
import Testimonial from "@/components/ui/Testimonial";
import Training from "@/components/ui/Training";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Showcase />
      <Services />
      <MonthlyEvents />
      <Events />
      <Branches />
      <Declaration />
      <Quote />
      <Testimonial />
      <Training />
      <Contact />
      <Footer />
    </>
  );
}
