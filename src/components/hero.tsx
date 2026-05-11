import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe, Shield, Zap } from "lucide-react";
import { SparrowCodeStream } from "./sparrow-code-stream";

export function Hero() {
  const highlights = [
    "Security by Design",
    "Industry-Grade SLAs",
    "Godly Integrity & Transparency",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-[72px]">
      {/* Refined background with subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white to-brand-blue/5" />
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f4ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f4ff_1px,transparent_1px)] bg-[size:64px_64px] opacity-60 pointer-events-none" /> */}
      
      {/* Sophisticated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1E3A8A 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      {/* Soft radial glow */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-3xl" />

      {/* Decorative line accents */}
      <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-brand-teal/0 via-brand-teal/30 to-brand-teal/0" />
      <div className="absolute bottom-0 right-0 w-32 h-px bg-gradient-to-r from-brand-teal/0 via-brand-teal/30 to-brand-teal/0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column: text content */}
          <div className="space-y-8">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-brand-blue uppercase font-secondary">
                Trusted IT Solutions Partner — Nigeria & Beyond
              </span>
            </div>

            {/* Main heading */}
            <h1 className="font-primary text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Transforming Businesses Through{" "}
              <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                Technology
              </span>
            </h1>

            {/* Description */}
            <p className="font-secondary text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
              Professional unified communications, network infrastructure, and custom software delivering operational excellence with integrity.
            </p>

            {/* Highlights list */}
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-teal" />
                  </div>
                  <span className="font-secondary font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA button + subtle trust indicator */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold text-base rounded-full hover:bg-brand-blue/90 transition-all duration-300 font-secondary shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Global delivery</span>
                </div>
                <div className="w-px h-4 bg-gray-200" />
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: code animation container */}
          <div className="relative">
            {/* Decorative frame glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 rounded-3xl blur-xl opacity-30" />
            
            {/* Main card */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-gray-900/5 border border-gray-100 overflow-hidden">
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-teal to-brand-blue/0" />
              
              {/* Header mock */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 bg-gray-50/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-0.5 rounded">sparrowwave-terminal</span>
                </div>
              </div>
              
              {/* Code stream content */}
              <div className="p-1 h-[440px] md:h-[500px]">
                <SparrowCodeStream />
              </div>
            </div>
            
            {/* Floating subtle stat (removed per earlier, but kept minimal) - optional trust badge inside */}
            <div className="absolute -bottom-3 -left-3 bg-white rounded-lg shadow-md px-3 py-1.5 border border-gray-100 hidden sm:flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-brand-teal" />
              <span className="text-xs font-medium text-gray-600">99.99% uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
