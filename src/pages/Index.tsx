
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BookPromotion from '@/components/BookPromotion';
import EmailSubscription from '@/components/EmailSubscription';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <BookPromotion />
        <EmailSubscription />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
