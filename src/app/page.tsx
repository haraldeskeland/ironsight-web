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
      <ScrollReveal animation="scale-up"><Features /></ScrollReveal>
      <ScrollReveal animation="slide-up"><Characters /></ScrollReveal>
      <ScrollReveal animation="slide-up"><Screenshots /></ScrollReveal>
      <ScrollReveal animation="scale-up"><DownloadCTA /></ScrollReveal>
    </main>
  );
}
