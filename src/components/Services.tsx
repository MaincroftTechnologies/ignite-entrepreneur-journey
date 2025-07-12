import { Users, MessageSquare, BookOpen, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: BookOpen, // You can replace this with an appropriate icon
      title: "Trailblazer Business Starter Kit",
      description:
        "A step-by-step starter kit to help aspiring young entrepreneurs discover their business idea, build a purpose-driven mindset, and take their first three actionable steps — grounded in faith and discipline.",
      features: [
        "Faith-driven foundation",
        "Purpose mindset framework",
        "3 actionable launch steps",
      ],
      price: "Free",
      popular: false,
    },
    {
      icon: Users,
      title: "Trailblazer Bootcamp – 4-Week Intensive",
      description:
        "A powerful 4-week live group program for young people (ages 16–30) to gain clarity and build a business that aligns with their strengths and values.",
      features: [
        "Live group calls",
        "Worksheets & accountability",
        "Faith-based mentorship",
        "Pitch session & certificate",
      ],
      price: "Contact for pricing",
      popular: true,
    },
    {
      icon: Zap,
      title: "1:1 Purpose to Profit Mentorship",
      description:
        "A 3-month private mentorship for high-potential youth or first-time founders serious about launching a purpose-driven business.",
      features: [
        "Identity & branding clarity",
        "Custom business plan",
        "Weekly strategy sessions",
        "Spiritual & ethical leadership",
      ],
      price: "High-ticket (Apply to join)",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Path to Success
          </h2>
          <p className="text-xl leading-[1.6rem] sm:leading-relaxed text-gray-600 max-w-3xl mx-auto">
            Whether you're just starting out or looking to scale, I have the
            right program to accelerate your entrepreneurial journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative hover:shadow-xl transition-all duration-300 ${
                service.popular ? "ring-2 ring-[#db652f] shadow-lg" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r to-[#db652f] from-[#f19c61] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      service.popular
                        ? "bg-[#f8eee7] text-[#db652f]"
                        : "bg-[#f8eee7] text-[#db652f]"
                    }`}
                  >
                    <service.icon size={32} />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">
                      {service.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-[#db652f] mt-1">
                      {service.price}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-[1.6rem] sm:leading-relaxed text-lg">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-2 h-2 bg-[#db652f] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full group ${
                    service.popular
                      ? "bg-[#db652f] hover:bg-[#db652f]/90 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                  asChild
                >
                  <Link to="/contact">
                    Get Started
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-[#f8eee7] rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Not sure which program is right for you?
          </h3>
          <p className="text-gray-600 mb-6  max-w-2xl mx-auto">
            Book a free 30-minute discovery call to discuss your goals and find
            the perfect fit for your entrepreneurial journey.
          </p>
          <div className="w-full  flex justify-center ">
            <Button
              className="bg-[#db652f] hover:bg-[#db652f]/90 text-white px-8 py-3 sm:text-lg font-semibold"
              asChild
            >
              <Link to="/contact">Schedule Free Discovery Call</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
