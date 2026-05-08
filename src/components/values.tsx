import { Heart, Shield, Award, ScrollText, HardHat, FileCheck2 } from 'lucide-react';

export function Values() {
  const values = [
    {
      icon: Heart,
      title: "People-Centered",
      description: "Every solution is designed with end-users in mind—ensuring adoption, not just deployment."
    },
    {
      icon: Award,
      title: "Godly Integrity",
      description: "Transparent pricing, honest assessments, and ethical practices in every engagement."
    },
    {
      icon: FileCheck2,
      title: "Technical Excellence",
      description: "Industry best practices, certified engineers, and rigorous quality standards always."
    },
    {
      icon: Shield,
      title: "Security by Design",
      description: "Security is embedded from day one—not bolted on as an afterthought."
    },
    {
      icon: ScrollText,
      title: "Documentation Discipline",
      description: "Comprehensive as-built docs, runbooks, and architecture diagrams for full knowledge transfer."
    },
    {
      icon: HardHat,
      title: "Support Readiness",
      description: "97.9% uptime achieved. We're committed to your success well beyond go-live."
    }
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-white">

      {/* Subtle background depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent" />
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1E3A8A 0.5px, transparent 0.5px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-brand-teal/60" />
            <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">
              Why We're Different
            </p>
            <div className="h-px w-8 bg-brand-teal/60" />
          </div>
          <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2] tracking-tight mb-5">
            Values that
            <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent"> drive excellence</span>
          </h2>
          <p className="font-secondary text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
            Beyond technical proficiency, we partner with you on a foundation of trust, ethics, and uncompromising quality.
          </p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 transition-all duration-400 hover:shadow-xl hover:shadow-brand-blue/10 border border-gray-100 hover:border-brand-blue/20 hover:-translate-y-1"
            >

              {/* Invisible gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative flex gap-5">

                {/* Icon container */}
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                    <value.icon className="w-5 h-5" />
                  </div>
                </div>
                
                {/* Text content */}
                <div className="flex-1">
                  <h3 className="font-primary text-lg font-bold text-gray-900 mb-2 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="font-secondary text-sm text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
              
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-900/5 text-gray-600 text-sm border border-gray-100/80 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            <span className="font-medium">100% client retention</span>
            <span className="w-px h-3 bg-gray-300 mx-2" />
            {/* <span className="font-medium">ISO 27001 certified</span> */}
            <span className="font-medium">Certified professionals and legally compliant</span>
            <span className="w-px h-3 bg-gray-300 mx-2" />
            <span className="font-medium">International and local countries served</span>
          </div>
        </div>
      </div>
    </section>
  );
}
