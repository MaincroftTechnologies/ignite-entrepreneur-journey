import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookPromotion from "@/components/BookPromotion";
import EmailSubscription from "@/components/EmailSubscription";
import { useRef } from "react";

const Index = () => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToEmailInput = () => {
    emailInputRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    emailInputRef.current?.focus();
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <BookPromotion onPreOrderClick={scrollToEmailInput} />
        <EmailSubscription inputRef={emailInputRef} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
