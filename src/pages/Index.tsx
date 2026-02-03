import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
