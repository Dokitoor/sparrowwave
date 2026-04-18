import { Values } from "../components/values";
import { Process } from "../components/process";
import { Stats } from "../components/stats";
import { CTA } from "../components/cta";

export function About() {
  return (
    <div className="pt-[72px] min-h-screen">
      {/* Page Header with team image */}
      <div className="relative py-32 px-6 lg:px-8 overflow-hidden bg-gray-950 text-white">
        <img
          src="/images/team.png"
          alt="Sparrowwave team collaborating"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-5">About Sparrowwave</p>
          <h1 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight">
            Technology with Purpose & Integrity
          </h1>
          <p className="font-secondary text-gray-300 text-xl max-w-xl leading-relaxed">
            We're not just a vendor—we're your long-term technology partner with integrity at the core.
          </p>
        </div>
      </div>
      <Stats />
      <Values />
      <Process />
      <CTA />
    </div>
  );
}
