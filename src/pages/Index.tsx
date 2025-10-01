import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhatIsWorldschool from "@/components/WhatIsWorldschool";
import Vision from "@/components/Vision";
import LearningApproach from "@/components/LearningApproach";
import WhySacredValley from "@/components/WhySacredValley";
import CommunityLife from "@/components/CommunityLife";
import Programs from "@/components/Programs";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Intro />
      <WhatIsWorldschool />
      <Vision />
      <LearningApproach />
      <CommunityLife />
      <WhySacredValley />
      <Programs />
      <CallToAction />
    </div>
  );
};

export default Index;