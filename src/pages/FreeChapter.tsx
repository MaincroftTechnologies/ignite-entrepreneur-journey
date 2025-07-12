
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FreeChapter = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/book" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
              <ArrowLeft size={20} className="mr-2" />
              Back to Book Page
            </Link>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <BookOpen size={32} className="text-blue-600 mr-3" />
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Free Chapter
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Chapter 1: The Foundation
              </h1>
              <h2 className="text-xl text-gray-600 mb-6">
                From The Entrepreneur's Blueprint
              </h2>
              <div className="flex items-center justify-center text-gray-500">
                <Clock size={16} className="mr-2" />
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <p className="text-lg text-blue-800 font-medium italic">
                  "Every successful business starts with a single decision: the decision to begin. 
                  But what separates those who dream from those who do? It's understanding that 
                  entrepreneurship isn't just about having a great idea—it's about building the 
                  right foundation."
                </p>
                <p className="text-sm text-blue-600 mt-2">- Sarah Johnson</p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Entrepreneurial Mindset</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                When I first started coaching entrepreneurs fifteen years ago, I noticed a pattern. 
                The ones who succeeded weren't necessarily the smartest in the room, nor did they 
                have the most revolutionary ideas. What they had was something far more valuable: 
                the right foundation.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Think of entrepreneurship like building a house. You wouldn't start with the roof 
                or worry about the color of the walls before laying the foundation. Yet that's 
                exactly what most aspiring entrepreneurs do. They get excited about the product, 
                the marketing, the potential profits—all before establishing the fundamental 
                principles that will determine their success or failure.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Three Pillars of Success</h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                In my experience working with over 500 entrepreneurs, I've identified three 
                fundamental pillars that separate successful ventures from failed attempts:
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">1. Clarity of Purpose</h4>
                <p className="text-gray-700 mb-4">
                  Before you can sell to others, you must be crystal clear about what you're 
                  offering and why it matters. This isn't just about your product or service—it's 
                  about understanding the transformation you provide to your customers' lives.
                </p>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">2. Market Validation</h4>
                <p className="text-gray-700 mb-4">
                  Too many entrepreneurs fall in love with their solution before confirming there's 
                  actually a problem worth solving. Real validation comes from paying customers, 
                  not friends and family saying "that's a great idea."
                </p>

                <h4 className="text-xl font-bold text-gray-900 mb-4">3. Systems Thinking</h4>
                <p className="text-gray-700">
                  Successful entrepreneurs don't just create products—they build systems that can 
                  operate and scale without their constant intervention. This mindset shift from 
                  doing everything yourself to creating processes is crucial.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Reality Check</h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Let me share a story about Maria, one of my clients who came to me with what she 
                thought was a brilliant business idea: a subscription box for pet accessories. 
                She had already invested $15,000 in inventory and website development before we 
                met.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The problem? She had never actually spoken to potential customers about whether 
                they wanted such a service. When we finally conducted market research, we discovered 
                that while pet owners loved the idea in theory, very few were willing to pay the 
                premium price point her business model required.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                This is where the foundation becomes critical. Instead of abandoning her business 
                entirely, we used the three pillars to rebuild. We clarified her true purpose 
                (helping busy pet owners provide the best care for their pets), validated a new 
                approach (on-demand delivery of specific pet needs rather than surprise boxes), 
                and built systems for customer acquisition and retention.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-bold text-orange-800 mb-3">Chapter 1 Key Takeaways:</h4>
                <ul className="list-disc list-inside text-orange-700 space-y-2">
                  <li>Success starts with the right foundation, not the perfect idea</li>
                  <li>Clarity of purpose must come before product development</li>
                  <li>Market validation prevents costly mistakes</li>
                  <li>Systems thinking enables sustainable growth</li>
                  <li>Failure often provides the best learning opportunities</li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                In the next chapter, we'll dive deep into how to develop unshakeable clarity 
                about your business purpose and create a value proposition that resonates with 
                your ideal customers. You'll learn the exact framework I use with my clients 
                to move from vague business ideas to concrete, actionable plans.
              </p>
            </article>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for the Complete Guide?</h2>
            <p className="text-xl text-blue-100 mb-8">
              This is just the beginning. Get the full book with 12 comprehensive chapters, 
              bonus materials, and exclusive access to our entrepreneur community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Pre-Order Full Book
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              >
                Join Newsletter
              </Button>
            </div>
          </div>
        </section>

        <EmailSubscription />
      </main>
      <Footer />
    </div>
  );
};

export default FreeChapter;
