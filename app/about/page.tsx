import { Header } from '@/components/organisms/Header';
import { WhoAreWe } from '@/components/organisms/WhoAreWe';
import { WhyChooseUs } from '@/components/organisms/WhyChooseUs';
import { Footer } from '@/components/organisms/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <WhoAreWe />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
}
