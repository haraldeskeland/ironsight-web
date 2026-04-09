import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import Characters from "@/components/Characters";
import Screenshots from "@/components/Screenshots";
import DownloadCTA from "@/components/DownloadCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Features />
      <Characters />
      <Screenshots />
      <DownloadCTA />
    </main>
  );
}
