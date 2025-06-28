
import { useState } from 'react';
import { Mail, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Welcome to the community!",
      description: "Check your email for your free Business Startup Guide.",
    });

    setEmail('');
    setIsSubscribing(false);
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
          Get Your Free Business Startup Guide
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join 10,000+ entrepreneurs who receive weekly insights, tips, and exclusive resources 
          to accelerate their business growth. Plus, get instant access to our comprehensive startup guide!
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border-white placeholder-gray-500 text-gray-900 h-12 text-lg"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubscribing}
              className="bg-orange-500 hover:bg-orange-600 text-white h-12 px-8 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              {isSubscribing ? (
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
