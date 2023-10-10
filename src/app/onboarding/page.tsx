import type { Metadata } from "next";

import OnboardingPage from "@/pages/onboarding-page";

export const metadata: Metadata = {
  title: "The Impact Wave - Onboard your Inititiave",
  description: "The Impact Wave - Unleash Your Generosity, Amplify Your Impact",
};

const Onboarding = () => {
  return <OnboardingPage />;
};

export default Onboarding;
