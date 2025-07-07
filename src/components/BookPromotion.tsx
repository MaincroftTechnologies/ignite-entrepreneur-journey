import { Book, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import book from "/public/too young.png";

const BookPromotion = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <div className="relative">
            <div className="relative z-10 max-w-md mx-auto lg:mx-0">
              <img
                src={book}
                alt="The Entrepreneur's Blueprint Book Cover"
                className="w-full shadow-2xl rounded-lg"
              />
              {/* <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop"
                alt="The Entrepreneur's Blueprint Book Cover"
                className="w-full shadow-2xl rounded-lg"
              /> */}

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-[#db652f] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                New Release!
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg transform rotate-3 scale-105 opacity-20"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-orange-400">
              <Book size={24} />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Coming Soon
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Too Young
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#db652f] from-[#f19c61] ">
                {" "}
                Too Strong
              </span>
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              A bold and empowering guide for young adults ready to defy doubt,
              ditch delay, and build impactful lives from the inside out. Rooted
              in real stories, spiritual truth, and strategic tools, this book
              ignites purpose and equips you to lead—right where you are.
            </p>

            {/* Key Features */}
            <div className="space-y-3 mt-4">
              <div className="flex items-center">
                <Star
                  className="text-yellow-400 mr-3"
                  size={20}
                  fill="currentColor"
                />
                <span>Bold mindset shifts to break limiting beliefs</span>
              </div>
              <div className="flex items-center">
                <Star
                  className="text-yellow-400 mr-3"
                  size={20}
                  fill="currentColor"
                />
                <span>
                  Real stories from young entrepreneurs like Tara Fela-Durotoye
                </span>
              </div>
              <div className="flex items-center">
                <Star
                  className="text-yellow-400 mr-3"
                  size={20}
                  fill="currentColor"
                />
                <span>
                  Faith-based confidence with 1 Timothy 4:12 as a foundation
                </span>
              </div>
              <div className="flex items-center">
                <Star
                  className="text-yellow-400 mr-3"
                  size={20}
                  fill="currentColor"
                />
                <span>
                  Clarity prompts and action steps to kickstart your journey
                </span>
              </div>
              <div className="flex items-center">
                <Star
                  className="text-yellow-400 mr-3"
                  size={20}
                  fill="currentColor"
                />
                <span>
                  Launch kit with business ideas, branding tools, and strategy
                </span>
              </div>
              <div className="flex items-center">
                <Star
                  className="text-yellow-400 mr-3"
                  size={20}
                  fill="currentColor"
                />
                <span>Bonus coaching and community access for support</span>
              </div>
            </div>

            {/* Pre-order CTA */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-orange-400">
                  $24.99
                </span>
                <span className="text-lg text-gray-400 line-through">
                  $39.99
                </span>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save 38%
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="  bg-[#db652f] hover:bg-[#db652f]/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group">
                  Pre-Order Now on Sellar
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Button>

                {/* <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold transition-all duration-200">
                  Read Sample Chapter
                </Button> */}
              </div>

              <p className="text-sm text-gray-400">
                Expected release: Q2 2024 • Free shipping worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookPromotion;
