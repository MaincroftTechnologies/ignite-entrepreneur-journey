import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const sheet_endpoint = import.meta.env.VITE_SHEET_URL;
const mail_chimp = import.meta.env.VITE_MAILCHIMP_URL_SECOND;

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    user_email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      full_name: formData.full_name,
      user_email: formData.user_email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
    };

    const fullSheetURL = `${sheet_endpoint}?tabId=Contact`;

    try {
      // Send both EmailJS and Sheets requests in parallel
      const [emailRes, sheetRes] = await Promise.all([
        emailjs.send(serviceId, templateId, templateParams, publicKey),
        fetch(fullSheetURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            [
              formData.full_name,
              formData.user_email,
              formData.phone,
              formData.company,
              formData.message,
            ],
          ]),
        }),
      ]);

      console.log(emailRes);

      const form = document.createElement("form");
      form.action = mail_chimp;
      form.method = "POST";
      form.target = "_blank";
      form.style.display = "none";

      const fields = [
        { name: "EMAIL", value: formData.user_email },
        { name: "FNAME", value: formData.full_name },
        { name: "PHONE", value: formData.phone },
        { name: "COMPANY", value: formData.company },
      ];

      fields.forEach(({ name, value }) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value || "";
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      if (!sheetRes.ok) {
        throw new Error("Failed to submit to Google Sheets");
      }

      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
      });

      setFormData({
        full_name: "",
        user_email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);
      toast({
        title: "Something went wrong!",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#f8eee7] py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Start Your
              <span className="bg-[#db652f] bg-clip-text text-transparent">
                Success Story
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business idea into reality? Get in touch
              and let's discuss how we can accelerate your entrepreneurial
              journey together.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Me a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="full_name"
                        name="full_name"
                        type="text"
                        required
                        value={formData.full_name}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="user_email"
                        name="user_email"
                        type="email"
                        required
                        value={formData.user_email}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company/Business
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Tell me about your business goals *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What challenges are you facing? What are your goals? How can I help you succeed?"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={
                      isSubmitting ||
                      !formData.full_name.trim() ||
                      !formData.user_email.trim()
                    }
                    className="w-full bg-[#db652f] hover:bg-[#db652f]/90 text-white h-12 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-[#f8eee7] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#dacabe]/50 p-3 rounded-lg">
                      <Mail className="text-[#db652f]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        leadwisebizinstitute@gmail.com
                      </p>
                      <p className="text-sm text-gray-500">
                        I respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#dacabe]/50 p-3 rounded-lg">
                      <Phone className="text-[#db652f]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+234 803 676 7712</p>
                      <p className="text-sm text-gray-500">
                        Mon–Fri, 9am–5pm WAT (Nigeria Time)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#dacabe]/50 p-3 rounded-lg">
                      <MapPin className="text-[#db652f]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600">
                        Olori Mojisola onikoyi banana Island road inside Patrick
                        Harbour aqua point, Lagos State, Nigeria.
                      </p>
                      <p className="text-sm text-gray-500">
                        Available worldwide via video calls
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#dacabe]/50 p-3 rounded-lg">
                      <Clock className="text-[#db652f]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Free Discovery Call
                      </h4>
                      <p className="text-gray-600">30-minute consultation</p>
                      <p className="text-sm text-gray-500">
                        Let's discuss your goals
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#db652f]/5 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    What to Expect
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Personalized response within 24 hours</li>
                    <li>• Free 30-minute discovery call</li>
                    <li>• Custom recommendations for your business</li>
                    <li>• No pressure, just valuable insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
