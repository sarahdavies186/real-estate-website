import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar"


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
        
      </main>
    </div>
  );
}