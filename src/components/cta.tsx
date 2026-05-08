import { ArrowRight, CheckCircle, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-gray-50">
      {/* Background depth and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100/50" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1E3A8A 0.5px, transparent 0.5px)`,
          backgroundSize: '28px 28px'
        }}
      />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue/95 shadow-2xl">
          {/* Refined abstract overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-teal/20 via-transparent to-transparent" />
          
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 lg:px-20 xl:px-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="max-w-xl">
              {/* Small badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <Zap className="w-3.5 h-3.5 text-brand-teal" />
                <span className="text-white/80 text-xs font-semibold tracking-wide uppercase">Limited engagement capacity</span>
              </div>
              
              <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] tracking-tight mb-5">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="font-secondary text-blue-100 text-lg leading-relaxed max-w-md">
                Let's discuss how Sparrowwave can help you achieve operational excellence through technology with godly integrity.
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                  <span className="text-white/80 text-sm font-medium">International and local countries served</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-brand-teal" />
                  <span className="text-white/80 text-sm font-medium">Certified Professionals and Legally Compliant</span>
                </div>
              </div>
            </div>

            {/* Button group */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0 w-full sm:w-auto">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-semibold text-base rounded-full hover:bg-gray-50 transition-all duration-300 font-secondary shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule a Discovery Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold text-base rounded-full hover:border-white/70 hover:bg-white/10 transition-all duration-300 font-secondary hover:-translate-y-0.5"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Optional bottom note */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-400">
            Free consultation. No obligation. We'll respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
