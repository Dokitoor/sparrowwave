import { Hero } from "../components/hero";
import { Services } from "../components/services";
import { Process } from "../components/process";
import { Values } from "../components/values";
import { SocialProof } from "../components/social-proof";
import { CTA } from "../components/cta";

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Values />
      <SocialProof />
      <CTA />
    </>
  );
}
