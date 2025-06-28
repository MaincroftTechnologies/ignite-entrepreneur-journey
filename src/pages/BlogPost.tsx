
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { Calendar, User, ArrowLeft, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would come from an API or CMS
  const blogPosts = {
    '1': {
      id: 1,
      title: "5 Essential Steps to Launch Your First Business",
      content: `
        <p>Starting a business can feel overwhelming, but breaking it down into manageable steps makes the journey clearer. Here's your roadmap to entrepreneurial success.</p>
        
        <h2>1. Validate Your Business Idea</h2>
        <p>Before investing time and money, ensure there's a market for your product or service. Conduct surveys, interview potential customers, and research your competition. This step is crucial for understanding whether your idea has real potential.</p>
        
        <h2>2. Create a Solid Business Plan</h2>
        <p>A well-crafted business plan serves as your roadmap. It should include your business model, target market analysis, financial projections, and marketing strategy. This document will be essential when seeking funding or partners.</p>
        
        <h2>3. Secure Funding</h2>
        <p>Determine how much capital you need and explore funding options. These might include personal savings, loans, investors, or crowdfunding. Each option has its pros and cons, so choose what aligns with your business goals.</p>
        
        <h2>4. Build Your Brand and Online Presence</h2>
        <p>Develop a strong brand identity including logo, website, and social media presence. In today's digital world, your online presence is often the first impression potential customers will have of your business.</p>
        
        <h2>5. Launch and Iterate</h2>
        <p>Don't wait for perfection. Launch your minimum viable product, gather feedback, and continuously improve. The key is to start, learn from your customers, and adapt accordingly.</p>
        
        <p>Remember, entrepreneurship is a journey, not a destination. Each step teaches you valuable lessons that will help you grow both personally and professionally.</p>
      `,
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      category: "Getting Started"
    },
    '2': {
      id: 2,
      title: "How to Validate Your Business Idea Before Investing",
      content: `
        <p>Save time and money by validating your business concept early. Learn proven methods to test market demand and refine your value proposition.</p>
        
        <h2>Why Validation Matters</h2>
        <p>Many entrepreneurs fall in love with their ideas without testing them in the real world. This can lead to costly mistakes and failed ventures. Validation helps you understand if there's genuine demand for your solution.</p>
        
        <h2>Methods for Validation</h2>
        <h3>Customer Interviews</h3>
        <p>Speak directly with potential customers. Ask about their pain points, current solutions, and willingness to pay for your proposed solution.</p>
        
        <h3>Landing Page Tests</h3>
        <p>Create a simple landing page describing your product and measure interest through sign-ups or pre-orders.</p>
        
        <h3>Minimum Viable Product (MVP)</h3>
        <p>Build the simplest version of your product that solves the core problem. Test it with early adopters and gather feedback.</p>
        
        <h2>Key Metrics to Track</h2>
        <p>Focus on metrics that matter: customer acquisition cost, lifetime value, conversion rates, and customer satisfaction scores.</p>
      `,
      author: "Sarah Johnson",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      category: "Strategy"
    },
    '3': {
      id: 3,
      title: "Building a Strong Personal Brand as an Entrepreneur",
      content: `
        <p>Your personal brand is your most valuable asset. Discover how to craft an authentic brand that attracts customers and opportunities.</p>
        
        <h2>What is Personal Branding?</h2>
        <p>Personal branding is the practice of marketing yourself and your career as a brand. It's about defining who you are, what you stand for, and how you want to be perceived by others.</p>
        
        <h2>Elements of a Strong Personal Brand</h2>
        <h3>Authenticity</h3>
        <p>Be genuine in all your interactions. People can sense authenticity, and it builds trust and credibility.</p>
        
        <h3>Consistency</h3>
        <p>Maintain consistent messaging across all platforms and interactions. Your brand should be recognizable whether someone encounters you on LinkedIn, at a networking event, or through your content.</p>
        
        <h3>Value Proposition</h3>
        <p>Clearly articulate what unique value you bring to the table. What makes you different from others in your field?</p>
        
        <h2>Building Your Brand Online</h2>
        <p>Leverage social media platforms, create valuable content, and engage with your audience regularly. Share insights, lessons learned, and behind-the-scenes glimpses of your entrepreneurial journey.</p>
        
        <h2>Networking and Relationships</h2>
        <p>Your personal brand extends beyond digital presence. Build meaningful relationships, provide value to others, and be known for your expertise and character.</p>
      `,
      author: "Sarah Johnson",
      date: "March 5, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      category: "Branding"
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button>
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Back to Blog Link */}
        <section className="bg-gray-50 py-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-8 space-x-6">
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="mb-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>

        {/* Author Bio */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SJ</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                  <p className="text-gray-600 mb-4">
                    Business Coach & Entrepreneur with over 10 years of experience helping aspiring business owners 
                    turn their ideas into successful ventures. Author of the upcoming book "The Entrepreneur's Blueprint."
                  </p>
                  <Link to="/about">
                    <Button variant="outline" size="sm">
                      Learn More About Sarah
                    </Button>
                  </Link>
                </div>
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

export default BlogPost;
