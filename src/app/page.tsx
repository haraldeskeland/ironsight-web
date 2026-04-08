import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import Characters from "@/components/Characters";
import Screenshots from "@/components/Screenshots";
import DownloadCTA from "@/components/DownloadCTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal><StatsBar /></ScrollReveal>
      <ScrollReveal><Features /></ScrollReveal>
      <ScrollReveal><Characters /></ScrollReveal>
      <ScrollReveal><Screenshots /></ScrollReveal>
      <ScrollReveal><DownloadCTA /></ScrollReveal>
    </main>
  );
}
