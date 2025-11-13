import ContactUsForm from "@/components/contact-us";
import FaqSection from "@/components/faq-section";
import MosamFeatures from "@/components/features";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <MosamFeatures />
      <FaqSection />
      <ContactUsForm />
    </>
  );
}
