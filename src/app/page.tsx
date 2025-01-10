import About from "@/components/shared/About";
import Footer from "@/components/shared/Footer";
import GetStarted from "@/components/shared/GetStarted";
import { Header } from "@/components/shared/Header";
import Performance from "@/components/shared/Performace";
import PriceChart from "@/components/shared/PriceChart";
import Sentiment from "@/components/shared/Sentiment";
import Tokenomics from "@/components/shared/Takenomics";
import TeamSection from "@/components/shared/Team";
import TrendingCoins from "@/components/shared/TrendingCoins";

export default function Home() {
  return (
    <main>
      <Header />
      <GetStarted />
      <TrendingCoins />
      <PriceChart />
      <Performance />
      <Sentiment />
      <Tokenomics />
      <TeamSection />
      <About />
      <Footer />
    </main>
  );
}
