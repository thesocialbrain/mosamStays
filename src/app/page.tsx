import ContactUsForm from "@/components/contact-us";
import FaqSection from "@/components/faq-section";
import MosamFeatures from "@/components/features";
import Cta from "@/components/hero/Cta";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <Cta />
      <Hero />
      <MosamFeatures />
      <FaqSection />
      <ContactUsForm />
    </>
  );
}
