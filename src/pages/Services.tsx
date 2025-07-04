
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import EmailSubscription from '@/components/EmailSubscription';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#f8eee7] py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Accelerate Your 
              <span className="bg-[#db652f] bg-clip-text text-transparent"> Business Growth</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of coaching services designed to meet you 
              wherever you are in your entrepreneurial journey.
            </p>
          </div>
        </section>

        <Services />
        <EmailSubscription />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
