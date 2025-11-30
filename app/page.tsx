import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import HowItWorks from "@/components/HowItWorks";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Hero2 />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Faq />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
