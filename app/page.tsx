import { Header } from '@/components/organisms/Header';
import { Hero } from '@/components/organisms/Hero';
import { Services } from '@/components/organisms/Services';
import { Strategy } from '@/components/organisms/Strategy';
import { WhyChooseUs } from '@/components/organisms/WhyChooseUs';
import { Footer } from '@/components/organisms/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Strategy />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
