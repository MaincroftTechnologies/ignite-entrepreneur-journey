import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HeroImage from "/fav.hero.jpg";
// import HeroImage from "/hero-picture.jpg";

const Hero = () => {
  return (
    <section className="relative bg-[#f8eee7] pt-16 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-[#eed8c8] text-[#db652f] px-4 py-2 rounded-full sm:text-sm text-[13px] font-medium">
              <Star size={16} className="mr-2 text-[#db652f]" />
              #1 Business Coach for Entrepreneurs
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[2.4rem] sm:leading-tight">
              Turn Your Business
              <span className="bg-gradient-to-r to-[#db652f] from-[#f19c61] bg-clip-text text-transparent">
                {" "}
                Ideas
              </span>
              <br />
              Into Reality
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-[1.6rem] sm:leading-relaxed max-w-lg">
              Empowering young entrepreneurs with faith-rooted discipline,
              vision oriented and resilience to build a legacy business with
              global impact.
            </p>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&crop=face"
                    alt="Client"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                    alt="Client"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
                    alt="Client"
                  />
                </div>
                <span>500+ Success Stories</span>
              </div>
              <div className="ml-[1rem] flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="bg-[#db652f] hover:bg-[#db652f]/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group">
                  Start Your Journey
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Button>
              </Link>

              {/* <Button
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 px-8 py-3 text-lg font-semibold group"
              >
                <Play
                  size={20}
                  className="mr-2 group-hover:scale-110 transition-transform duration-200"
                />
                Watch Success Stories
              </Button> */}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={HeroImage}
                alt="Professional Business Coach"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#f8eee7] rounded-full flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-xl">$</span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Avg. Revenue Growth</p>
                    <p className="font-bold text-gray-900">300%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#f8eee7] rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">⚡</span>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Success Rate</p>
                    <p className="font-bold text-gray-900">95%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#a35f2e] to-[#deac89] rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
