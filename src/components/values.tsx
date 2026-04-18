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
    <section className="py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-4">Core Pillars</p>
          <h2 className="font-primary text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Values That Matter
          </h2>
          <p className="font-secondary text-lg text-gray-500">
            Beyond just technical proficiency, we partner with you on a foundation of trust and ethics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-brand-blue/20 hover:shadow-[0_4px_24px_rgba(30,58,138,0.06)] transition-all duration-300 group"
            >
              <div className="shrink-0">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/8 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <value.icon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="font-primary text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="font-secondary text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
