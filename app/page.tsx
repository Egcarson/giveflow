import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import FeaturedGiveaways from "@/components/landing/featured-giveaways";
import Footer from "@/components/landing/footer";
import Navbar from "@/components/landing/navbar";
import Stats from "@/components/landing/stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />

      <FeaturedGiveaways limit={3} />

      <Footer />
    </>
  );
}
