import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FinancialOverview from "@/components/FinancialOverview";
import Questions from "@/components/Questions";
import Planning from "@/components/Planning";
import SmallMoves from "@/components/SmallMoves";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <Navbar />

      <main
        id="top"
        className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"
      >
        <ScrollReveal direction="up" scale rotate={2}>
          <Hero />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.05}>
          <HowItWorks />
        </ScrollReveal>

        <ScrollReveal direction="right" scale rotate={1.5}>
          <FinancialOverview />
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.05}>
          <Questions />
        </ScrollReveal>

        <ScrollReveal direction="right" scale rotate={1}>
          <Planning />
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.05}>
          <SmallMoves />
        </ScrollReveal>

        <ScrollReveal direction="up" scale rotate={2}>
          <FinalCTA />
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}