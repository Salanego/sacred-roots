import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import WhySacredValley from "@/components/WhySacredValley";
import CommunityLife from "@/components/CommunityLife";
import Programs from "@/components/Programs";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Vision />
      <WhySacredValley />
      <CommunityLife />
      <Programs />
      <CallToAction />
    </div>
  );
};

export default Index;