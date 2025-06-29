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
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Meet Your Business
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {" "}
                    Success Partner
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Hi, I'm Sarah Johnson, and I've dedicated my career to helping
                  ambitious entrepreneurs turn their visions into thriving
                  businesses. With over 15 years of experience and 500+ success
                  stories, I'm here to guide you on your entrepreneurial
                  journey.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">500+</div>
                    <div className="text-gray-600">Businesses Launched</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">
                      $50M+
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
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                My entrepreneurial journey began 20 years ago when I started my
                first business from my college dorm room. Like many
                entrepreneurs, I faced countless challenges, made numerous
                mistakes, and learned hard lessons that no business school could
                teach.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                After successfully building and selling three companies, I
                realized my true passion wasn't just in building businesses—it
                was in empowering others to achieve their entrepreneurial
                dreams. That's when I transitioned into coaching and consulting,
                bringing real-world experience to aspiring business owners.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, I've had the privilege of working with entrepreneurs
                across 25+ industries, from tech startups to traditional
                brick-and-mortar businesses. My mission is simple: to provide
                you with the strategies, support, and accountability you need to
                build a business that doesn't just survive, but thrives.
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
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-blue-600" size={32} />
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
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven</h3>
                <p className="text-gray-600">
                  My strategies are battle-tested through my own ventures and
                  validated by hundreds of client successes.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-blue-600" size={32} />
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
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue-600" size={32} />
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
        <section className="py-20 bg-white">
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
        </section>

        <EmailSubscription />
      </main>
      <Footer />
    </div>
  );
};

export default About;
