import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SparrowCodeStream } from "./sparrow-code-stream";

export function Hero() {
  const highlights = [
    "Security by Design",
    "Industry-Grade SLAs",
    "Godly Integrity & Transparency",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-[72px]">
      {/* Very subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f4ff_1px,transparent_1px)] bg-[size:64px_64px] opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/8 border border-brand-blue/15 mb-10">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-xs font-semibold tracking-widest text-brand-blue uppercase font-secondary">Trusted IT Solutions Partner in Nigeria</span>
            </div>

            <h1 className="font-primary text-[3rem] sm:text-[3.75rem] lg:text-[4.5rem] leading-[1.05] font-bold text-gray-900 mb-7">
              Transforming Businesses Through{" "}
              <span className="text-brand-blue italic">Technology</span>
            </h1>

            <p className="font-secondary text-xl text-gray-500 leading-relaxed max-w-xl mb-8">
              Professional unified communications, network infrastructure, and custom software delivering operational excellence with integrity.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 font-secondary text-gray-600">
                  <CheckCircle className="w-5 h-5 text-brand-teal shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold text-base rounded-full hover:bg-brand-blue/90 transition-all duration-200 font-secondary shadow-[0_4px_24px_rgba(30,58,138,0.22)]"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Code Animation - Integrated Look */}
          <div className="relative hidden lg:block h-[500px]">
            <div className="absolute inset-0 bg-brand-blue/[0.03] rounded-3xl -z-10" />
            <div className="h-full pl-8 py-4">
              <SparrowCodeStream />
            </div>
            {/* Floating stat card removed as per user request */}
          </div>
        </div>
      </div>
    </section>
  );
}
