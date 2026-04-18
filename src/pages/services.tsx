import { Services as ServicesGrid } from "../components/services";
import { CTA } from "../components/cta";

export function Services() {
  return (
    <div className="pt-[72px] min-h-screen">
      {/* Page Header with datacenter image background */}
      <div className="relative py-32 px-6 lg:px-8 overflow-hidden bg-gray-950 text-white">
        <img
          src="/images/datacenter.png"
          alt="Data center"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-5">What We Do</p>
          <h1 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight">Our Services</h1>
          <p className="font-secondary text-gray-400 text-xl max-w-xl leading-relaxed">
            Comprehensive IT solutions driving measurable business results — from unified communications to enterprise software.
          </p>
        </div>
      </div>
      <ServicesGrid />
      <CTA />
    </div>
  );
}
