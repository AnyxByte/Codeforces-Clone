import ContestsSection from "@/components/LandingPage/ContestsSection";
import Footer from "@/components/LandingPage/Footer";
import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";
import ProblemsetSection from "@/components/LandingPage/ProblemsetSection";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ContestsSection />
      <ProblemsetSection />
      <Footer />
    </main>
  );
}
