
import { Users, MessageSquare, BookOpen, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "1-on-1 Coaching",
      description: "Personalized coaching sessions tailored to your unique business challenges and goals.",
      features: ["Weekly 60-minute sessions", "Custom action plans", "Direct messaging support", "Progress tracking"],
      price: "Starting at $297/month",
      popular: true
    },
    {
      icon: MessageSquare,
      title: "Group Coaching",
      description: "Join a community of like-minded entrepreneurs in our intensive group coaching program.",
      features: ["Bi-weekly group calls", "Peer networking", "Shared resources", "Community support"],
      price: "Starting at $97/month",
      popular: false
    },
    {
      icon: BookOpen,
      title: "Speaking & Workshops",
      description: "Inspire your team or event attendees with proven business growth strategies.",
      features: ["Keynote speaking", "Interactive workshops", "Custom presentations", "Follow-up resources"],
      price: "Contact for pricing",
      popular: false
    },
    {
      icon: Zap,
      title: "Intensive VIP Day",
      description: "Fast-track your business growth with a full-day intensive strategy session.",
      features: ["8-hour intensive session", "Complete business audit", "90-day action plan", "Follow-up support"],
      price: "Starting at $2,997",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're just starting out or looking to scale, I have the right program 
            to accelerate your entrepreneurial journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${
              service.popular ? 'ring-2 ring-blue-500 shadow-lg' : ''
            }`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${
                    service.popular ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <service.icon size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                    <p className="text-lg font-semibold text-blue-600 mt-1">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full group ${
                    service.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                  asChild
                >
                  <Link to="/contact">
                    Get Started
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Not sure which program is right for you?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Book a free 30-minute discovery call to discuss your goals and find the perfect fit 
            for your entrepreneurial journey.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold" asChild>
            <Link to="/contact">
              Schedule Free Discovery Call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
