import { Award, Users, TrendingUp, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmailSubscription from "@/components/EmailSubscription";

import HeroImage from "/hero-picture.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#f8eee7] py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Meet Your Business
                  <span className="bg-gradient-to-r to-[#db652f] ml-2 from-[#f19c61] bg-clip-text text-transparent">
                  
                    Success Partner
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Hi, I'm Favour Aruwei. I help young and ambitious
                  entrepreneurs turn their ideas into impactful, purpose-driven
                  businesses. After years of learning through real struggles and
                  breakthroughs, my mission is to guide you with the clarity,
                  mindset, and strategy needed to build and thrive.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#db652f]">
                      100+
                    </div>
                    <div className="text-gray-600">Businesses Launched</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#db652f]">
                      $50k+
                    </div>
                    <div className="text-gray-600">Revenue Generated</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={HeroImage}
                  alt="Sarah Johnson - Business Coach"
                  className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* My Story */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              My Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                In 2015, I launched my first business with one goal: to make
                profit. But entrepreneurship quickly proved to be more than just
                hustle—it demanded clarity, discipline, and structure. For five
                years, I stayed busy but not productive, constantly reinvesting
                without clear results. My finances were disorganized, and
                despite the effort, progress was slow.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Everything changed in year six. I paused, reflected, and
                uncovered the missing elements: strategy, systems, and
                self-awareness. I stopped chasing busyness and embraced
                intentionality. That shift transformed my business—it became not
                just profitable, but impactful and sustainable.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                I also realized I wasn’t alone. Many entrepreneurs struggle
                silently, and countless young people hold back because they
                believe age is a barrier. That revelation sparked a deeper
                mission—to coach and empower the next generation. I began
                teaching that success has no age limit, and your mindset is your
                greatest asset.
              </p>
              <p className="text-lg leading-relaxed">
                Today, I run a thriving business and lead coaching programs that
                help young adults build with clarity, confidence, and purpose.
                My journey is proof that small beginnings aren’t
                setbacks—they’re launchpads. And I’m here to help others turn
                their struggle into strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Values & Approach */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              My Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-[#f8eee7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-[#db652f]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Personalized
                </h3>
                <p className="text-gray-600">
                  Every entrepreneur is unique. I tailor my coaching to your
                  specific goals, challenges, and vision.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#f8eee7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-[#db652f]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven</h3>
                <p className="text-gray-600">
                  My strategies are battle-tested through my own ventures and
                  validated by hundreds of client successes.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-[#f8eee7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-[#db652f]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Action-Oriented
                </h3>
                <p className="text-gray-600">
                  We focus on taking consistent action. Every session includes
                  clear next steps and accountability.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-{#f8eee7} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#db652f]" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Supportive
                </h3>
                <p className="text-gray-600">
                  Building a business can be lonely. I provide the support and
                  encouragement you need to keep going.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials */}
        {/* <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Credentials & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Education
                </h3>
                <p className="text-gray-600">
                  MBA in Entrepreneurship
                  <br />
                  Harvard Business School
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Certifications
                </h3>
                <p className="text-gray-600">
                  Certified Business Coach
                  <br />
                  International Coach Federation
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Recognition
                </h3>
                <p className="text-gray-600">
                  Top 50 Business Coaches
                  <br />
                  Entrepreneur Magazine
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <EmailSubscription />
      </main>
      <Footer />
    </div>
  );
};

export default About;
