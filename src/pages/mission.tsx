import { Target, Heart, Shield, Award, ScrollText, HardHat, FileCheck2, Users } from "lucide-react";

const values = [
  { icon: Heart, title: "People-Centered", description: "Every solution is designed with end-users in mind—ensuring adoption, not just deployment." },
  { icon: Award, title: "Godly Integrity", description: "Transparent pricing, honest assessments, and ethical practices in every engagement." },
  { icon: FileCheck2, title: "Technical Excellence", description: "Industry best practices, certified engineers, and rigorous quality standards always." },
  { icon: Shield, title: "Security by Design", description: "Security is embedded from day one—not bolted on as an afterthought." },
  { icon: ScrollText, title: "Documentation Discipline", description: "Comprehensive as-built docs, runbooks, and architecture diagrams for full knowledge transfer." },
  { icon: HardHat, title: "Support Readiness", description: "97.9% uptime achieved. We're committed to your success well beyond go-live." },
];

export function Mission() {
  return (
    <div className="pt-[72px] min-h-screen">
      <div className="py-24 px-6 lg:px-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-5">Mission & Values</p>
          <h1 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight">
            Technology with a Higher Purpose
          </h1>
          <p className="font-secondary text-gray-400 text-xl max-w-xl leading-relaxed">
            We believe great technology is built on an even greater foundation — integrity, excellence, and a genuine care for people.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/8 flex items-center justify-center mb-8">
                <Target className="w-7 h-7 text-brand-blue" />
              </div>
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-4">Our Mission</p>
              <h2 className="font-primary text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Organisations Through Transformative Technology
              </h2>
              <p className="font-secondary text-gray-500 text-lg leading-relaxed mb-6">
                Sparrowwave exists to help businesses and institutions across Nigeria leverage technology to operate more efficiently, serve their customers better, and achieve lasting competitive advantage.
              </p>
              <p className="font-secondary text-gray-500 text-lg leading-relaxed">
                We are a mission-driven consultancy that brings together deep technical expertise and an unwavering commitment to excellence and ethical practice.
              </p>
            </div>
            <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-primary font-bold text-gray-900">Peter Atim</p>
                  <p className="font-secondary text-sm text-gray-500">Chief Executive Officer</p>
                </div>
              </div>
              <blockquote className="font-secondary text-gray-600 text-lg leading-relaxed italic">
                "We started Sparrowwave because we saw a gap — organisations needed a partner who combined genuine technical depth with the kind of integrity that's increasingly rare. That remains our north star."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-4">Core Values</p>
            <h2 className="font-primary text-4xl md:text-5xl font-bold text-gray-900 mb-5">Built on Values That Matter</h2>
            <p className="font-secondary text-lg text-gray-500">These aren't just words on a wall — they're the principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={index} className="flex gap-5 p-7 rounded-2xl border border-gray-200 bg-white hover:border-brand-blue/20 hover:shadow-md transition-all duration-300 group">
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
    </div>
  );
}
