import { Footer, Navbar, Hero, Breadcrumbs } from "@components/common";
import { CourseList } from "@components/course";
import { BaseLayout } from "@components/layout";
import { Card } from "@components/order";
import { EthRates, WalletBar } from "@components/web3";
export default function Home() {
  return (
    <BaseLayout>
      <Hero />
      <Breadcrumbs />
      <WalletBar />
      <EthRates />
      <Card />
      <CourseList />
    </BaseLayout>
  );
}
