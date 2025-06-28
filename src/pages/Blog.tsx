
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailSubscription from '@/components/EmailSubscription';
import { Calendar, User, ArrowRight, BookOpen, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "5 Essential Steps to Launch Your First Business",
      excerpt: "Starting a business can feel overwhelming, but breaking it down into manageable steps makes the journey clearer. Here's your roadmap to entrepreneurial success.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      category: "Getting Started"
    },
    {
      id: 2,
      title: "How to Validate Your Business Idea Before Investing",
      excerpt: "Save time and money by validating your business concept early. Learn proven methods to test market demand and refine your value proposition.",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      category: "Strategy"
    },
    {
      id: 3,
      title: "Building a Strong Personal Brand as an Entrepreneur",
      excerpt: "Your personal brand is your most valuable asset. Discover how to craft an authentic brand that attracts customers and opportunities.",
      author: "Sarah Johnson",
      date: "March 5, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      category: "Branding"
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "The Psychology of Successful Entrepreneurs",
      excerpt: "Understanding the mindset that drives successful entrepreneurs and how to develop these mental frameworks yourself.",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Mindset"
    },
    {
      id: 5,
      title: "Funding Your Startup: A Complete Guide",
      excerpt: "Explore different funding options from bootstrapping to venture capital, and learn which path is right for your business.",
      date: "February 20, 2024",
      readTime: "12 min read",
      category: "Finance"
    },
    {
      id: 6,
      title: "Digital Marketing Strategies for New Businesses",
      excerpt: "Cost-effective digital marketing tactics that help new businesses build awareness and attract customers online.",
      date: "February 15, 2024",
      readTime: "9 min read",
      category: "Marketing"
    }
  ];

  const categories = [
    { name: "Getting Started", icon: BookOpen, count: 12 },
    { name: "Strategy", icon: Target, count: 8 },
    { name: "Growth", icon: TrendingUp, count: 15 },
    { name: "Mindset", icon: User, count: 6 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Business Insights & 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Resources</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical advice, proven strategies, and actionable insights to help you build 
              and grow a successful business. New articles published weekly.
            </p>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-blue-600 transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User size={16} className="mr-2" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar size={16} className="mr-2" />
                        <span>{post.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                        Read More <ArrowRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories & Recent Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Categories Sidebar */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-4">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <div 
                        key={category.name}
                        className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                      >
                        <div className="flex items-center">
                          <IconComponent size={20} className="text-blue-600 mr-3" />
                          <span className="font-medium text-gray-900">{category.name}</span>
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="lg:col-span-3">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Articles</h3>
                <div className="space-y-6">
                  {recentPosts.map((post) => (
                    <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">{post.readTime}</span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">
                          {post.title}
                        </h4>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar size={16} className="mr-2" />
                            <span>{post.date}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                            Read More <ArrowRight size={16} className="ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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

export default Blog;
