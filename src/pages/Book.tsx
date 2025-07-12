import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { Star, CheckCircle, Users, Award, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Book = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Tech Entrepreneur",
      content: "This book transformed how I approach business challenges. Sarah's insights are practical and immediately actionable.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      content: "Finally, a business book that speaks to real entrepreneurs. The strategies outlined here helped me double my revenue.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Startup Founder",
      content: "Sarah's coaching methodology translated perfectly into book form. It's like having a personal business mentor.",
      rating: 5
    }
  ];

  const bookFeatures = [
    "Step-by-step business launch framework",
    "Market validation techniques that actually work",
    "Financial planning templates and worksheets",
    "Personal branding strategies for entrepreneurs",
    "Growth hacking methods for scaling",
    "Crisis management and pivot strategies",
    "Building high-performing teams",
    "Exit strategy planning and execution"
  ];

  const bonuses = [
    {
      title: "Digital Workbook",
      description: "Interactive exercises and templates to implement each chapter's strategies",
      value: "$97"
    },
    {
      title: "Video Masterclass Series",
      description: "6-part video series diving deeper into key concepts from the book",
      value: "$297"
    },
    {
      title: "Private Community Access",
      description: "Join an exclusive community of readers implementing the book's strategies",
      value: "$197"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-3">
                    Pre-Order Now
                  </span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">(127 early reviews)</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  The Entrepreneur's 
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {" "}Blueprint
                  </span>
                </h1>
                <h2 className="text-xl text-gray-600 mb-8">
                  From Idea to Empire: A Step-by-Step Guide to Building Your Dream Business
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  After coaching hundreds of successful entrepreneurs, I've distilled the most effective 
                  strategies into this comprehensive guide. Whether you're just starting out or looking 
                  to scale your existing business, this book provides the roadmap you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Pre-Order Now - $24.99
                    <ExternalLink size={20} className="ml-2" />
                  </Button>
                  <Link to="/book/free-chapter">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="px-8 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
                    >
                      Read Free Chapter
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  <Calendar size={16} className="inline mr-2" />
                  Expected release: June 2024 | Available in hardcover, paperback, and digital formats
                </p>
              </div>
              
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white p-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">The Entrepreneur's Blueprint</h3>
                      <p className="text-blue-100 mb-6">From Idea to Empire</p>
                      <div className="border-t border-blue-300 pt-4">
                        <p className="text-lg font-semibold">Sarah Johnson</p>
                        <p className="text-blue-200 text-sm">Business Coach & Entrepreneur</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What You'll Learn</h2>
              <p className="text-xl text-gray-600">
                Proven strategies and frameworks used by successful entrepreneurs worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {bookFeatures.map((feature, index) => (
                <div key={index} className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <CheckCircle size={24} className="text-green-500 mr-4 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Early Readers Say</h2>
              <p className="text-xl text-gray-600">
                Join hundreds of entrepreneurs who've already transformed their businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus Materials */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Exclusive Bonuses</h2>
              <p className="text-xl text-gray-600">
                Pre-order now and get over $590 worth of bonus materials absolutely free
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bonuses.map((bonus, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award size={32} className="text-white" />
                    </div>
                    <CardTitle className="text-xl">{bonus.title}</CardTitle>
                    <p className="text-2xl font-bold text-green-600">{bonus.value} Value</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{bonus.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={48} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">About the Author</h2>
              <p className="text-xl text-blue-100 mb-6">
                Sarah Johnson has helped over 500 entrepreneurs launch and scale their businesses, 
                generating millions in combined revenue. Her proven methodologies have been featured 
                in major publications and adopted by successful companies worldwide.
              </p>
              <div className="flex justify-center space-x-8 text-center">
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-blue-200">Entrepreneurs Coached</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">$50M+</p>
                  <p className="text-blue-200">Revenue Generated</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-blue-200">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Build Your Dream Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of entrepreneurs who are transforming their ideas into successful businesses.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Pre-Order Your Copy Today
              <ExternalLink size={24} className="ml-2" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              30-day money-back guarantee | Instant digital download upon release
            </p>
          </div>
        </section>

        <EmailSubscription />
      </main>
      <Footer />
    </div>
  );
};

export default Book;
