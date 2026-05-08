import { Link } from "react-router-dom";
import { ArrowRight, Clock, Sparkles, Zap, Shield, Globe } from "lucide-react";

export function Solutions() {
  const solutions = [
    { 
      title: "Unified Communications", 
      description: "A fully integrated communications platform combining voice, video, messaging, and collaboration in one seamless experience.", 
      path: "/solutions/unified-comms",
      icon: Zap,
      status: "coming"
    },
    { 
      title: "Managed Services", 
      description: "Outsource your IT operations to a dedicated team of engineers who proactively manage and support your entire technology estate.", 
      path: "/solutions/managed-services",
      icon: Shield,
      status: "coming"
    },
    { 
      title: "IT Infrastructure", 
      description: "End-to-end IT infrastructure planning, deployment, and optimisation — from servers and storage to networking and cloud.", 
      path: "/solutions/it-infrastructure",
      icon: Globe,
      status: "coming"
    },
    { 
      title: "Digital Transformation", 
      description: "A holistic programme to reimagine your business processes, customer experiences, and operations through technology.", 
      path: "/solutions/digital-transformation",
      icon: Sparkles,
      status: "coming"
    },
  ];

  return (
    <div className="pt-[72px] min-h-screen bg-white">
      {/* Hero Section - refined with gradient and depth */}
      <div className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-teal/10 via-transparent to-transparent" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-teal" />
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">
                Solutions
              </p>
            </div>
            <h1 className="font-primary text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Integrated Solutions for Every Challenge
            </h1>
            <p className="font-secondary text-gray-400 text-xl leading-relaxed max-w-xl">
              Beyond individual services, we offer comprehensive solution packages designed to solve complex, interconnected business challenges.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Solutions Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-brand-teal/50" />
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">Our Offerings</p>
              <div className="h-px w-6 bg-brand-teal/50" />
            </div>
            <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Solution Packages</h2>
            <p className="font-secondary text-gray-500 text-lg mt-4">Tailored to address your most complex business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-50 rounded-2xl border border-brand-teal/20 hover:border-brand-blue/30 hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 overflow-hidden"
              >
                {/* Subtle gradient accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="p-8 relative">
                  {/* Icon and status row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      <span className="font-secondary text-xs font-semibold text-amber-700">Coming Soon</span>
                    </div>
                  </div>
                  
                  <h2 className="font-primary text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                    {solution.title}
                  </h2>
                  <p className="font-secondary text-gray-500 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-brand-blue font-semibold font-secondary text-sm group-hover:gap-3 transition-all duration-200"
                  >
                    Register Interest 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                
                {/* Bottom decorative bar */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Pre-launch Notice Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
            </span>
            <span className="text-xs font-semibold text-gray-600">Early access available</span>
          </div>
          <h3 className="font-primary text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Be among the first to experience these solutions
          </h3>
          <p className="font-secondary text-gray-500 max-w-md mx-auto">
            Join our early access list and get priority onboarding, exclusive pricing, and direct input into our solution roadmap.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue/95 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-teal/20 via-transparent to-transparent" />
            
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to transform your business?
              </h2>
              <p className="font-secondary text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                Let's discuss which solution package aligns with your strategic goals and how we can tailor it to your unique environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 font-secondary shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:border-white/70 hover:bg-white/10 transition-all duration-300 font-secondary hover:-translate-y-0.5"
                >
                  Request Early Access
                </Link>
              </div>
              <p className="text-xs text-blue-200/60 mt-6">No obligation • Priority onboarding for early registrants</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
