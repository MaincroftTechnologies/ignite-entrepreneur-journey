import { useState } from "react";
import { Mail, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const sheet_endpoint = import.meta.env.VITE_SHEET_URL;
const mail_chimp = import.meta.env.VITE_MAILCHIMP_URL;

const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    full_name: "",
    user_email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      full_name: formData.full_name,
      user_email: formData.user_email,
    };

    const fullSheetURL = `${sheet_endpoint}?tabId=BookSubscribers`;

    try {
      // Send both EmailJS and Sheets requests in parallel
      const [emailRes, sheetRes] = await Promise.all([
        emailjs.send(serviceId, templateId, templateParams, publicKey),
        fetch(fullSheetURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([[formData.user_email]]),
        }),
      ]);

      console.log(emailRes);

      if (!sheetRes.ok) {
        throw new Error("Failed to submit to Google Sheets");
      }

      const form = document.createElement("form");
      form.action = mail_chimp;
      form.method = "POST";
      form.target = "_blank"; // So Mailchimp's confirmation opens in a new tab
      form.style.display = "none";

      const emailInput = document.createElement("input");
      emailInput.type = "hidden";
      emailInput.name = "EMAIL"; // Mailchimp requires this name
      emailInput.value = formData.user_email;

      form.appendChild(emailInput);
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you within 24 hours.",
      });

      setFormData({
        full_name: "",
        user_email: "",
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
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <Gift size={48} className="text-white" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Level Up Your Business Mindset?
        </h2>

        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          I help driven entrepreneurs unlock real growth strategies. Grab my
          FREE eBook:
          <strong className="text-white">
            "7 Business Shifts That Create Lasting Wealth"
          </strong>
          . Discover mindset shifts, habits, and tactics that separate success
          from struggle. Drop your email and I’ll send it straight to your
          inbox. Let’s grow together.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="email"
                name="user_email"
                placeholder="Enter your email address"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="bg-white border-white placeholder-gray-500 text-gray-900 h-12 text-lg"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#db652f] hover:bg-[#db652f]/90 text-white h-12 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Subscribing...
                </div>
              ) : (
                <div className="flex items-center">
                  <Mail size={20} className="mr-2" />
                  Get Free Guide
                </div>
              )}
            </Button>
          </div>
        </form>

        <p className="text-blue-100 text-sm mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default EmailSubscription;
