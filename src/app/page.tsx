import ContactUsForm from "@/components/contact-us";
import FaqSection from "@/components/faq-section";
import MosamFeatures from "@/components/features";
import Cta from "@/components/hero/Cta";
import Hero from "@/components/hero/hero";
import Quote from "@/components/quote/quote";

export default function Home() {
  return (
    <>
      <Cta />
      <Hero />
      <MosamFeatures />
      <Quote />
      <FaqSection />
      <ContactUsForm />
    </>
  );
}
