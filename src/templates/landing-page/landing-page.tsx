import {
  CallToAction,
  CustormerStorySection,
  FeatureSection,
  HeroSection,
  SupportSection,
} from "@/templates/landing-page/sections";

export const LandingPage = () => {
  return (
    <article className="flex flex-col items-center gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustormerStorySection />
      <CallToAction />
    </article>
  );
};
