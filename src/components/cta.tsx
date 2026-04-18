import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-brand-blue">
          {/* Content */}
          <div className="relative z-10 px-10 py-20 md:px-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="font-primary text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="font-secondary text-blue-200 text-lg leading-relaxed">
                Let's discuss how Sparrowwave can help you achieve operational excellence through technology with godly integrity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-semibold text-base rounded-full hover:bg-gray-50 transition-all duration-200 font-secondary shadow-lg"
              >
                Schedule a Discovery Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white font-semibold text-base rounded-full hover:bg-white/10 transition-all duration-200 font-secondary"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
