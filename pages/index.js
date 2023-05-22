import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Properties from "../components/Properties";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sarah Davies</title>
        <meta></meta>
      </Head>
      <main>
        <Navbar />
        <HeroSection />
        <Properties />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
