import About from "@/components/shared/About";
import Container from "@/components/shared/container";
import Footer from "@/components/shared/Footer";
import GetStarted from "@/components/shared/GetStarted";
import { Header } from "@/components/shared/Header";
import Performance from "@/components/shared/Performace";
import PriceChart from "@/components/shared/PriceChart";
import Sentiment from "@/components/shared/Sentiment";
import Tokenomics from "@/components/shared/Takenomics";
import TeamSection from "@/components/shared/Team";
import TrendingCoins from "@/components/shared/TrendingCoins";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Home() {
  return (
    <main>
      <Header />
      <Container className="p-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Cryptocurrencies</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Bitcoin</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
      <Container className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-4 px-2">
        <section className="lg:col-span-2 place-items-center">
          <PriceChart />
          <Performance />
          <Sentiment />
          <About />
          <Tokenomics />
          <TeamSection />
        </section>
        <aside className="lg:col-span-1 relative flex flex-col items-center gap-4">
          <GetStarted />
          <TrendingCoins />
        </aside>
      </Container>
      <Footer />
    </main>
  );
}
