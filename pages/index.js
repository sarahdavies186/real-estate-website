import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar"
import Properties from "../components/Properties";
import Services from "../components/Servies"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sarah Davies</title>
        <meta></meta>
      </Head>
      <main>
      <section>
          <Navbar />
        </section>
        <section>
          <HeroSection />
        </section>
        <section>
          <Properties />
        </section>
        <section>
          <Services />
        </section>
        
      </main>
    </div>
  );
}