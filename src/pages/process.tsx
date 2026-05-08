import { CheckCircle2, ChevronRight, Sparkles, Search, Edit2, Rocket, Shield } from "lucide-react";

export function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Understanding Your World",
      description: "Before we design a single solution, we take time to deeply understand your business. We conduct stakeholder interviews, review your current infrastructure, audit your workflows, and identify both the visible problems and the hidden risks.",
      deliverables: ["Needs Assessment Report", "Current State Analysis", "Risk Register", "Opportunity Mapping"],
      icon: <Search className="w-6 h-6 text-gray-700" />
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Engineering the Right Solution",
      description: "Armed with a thorough understanding of your needs, our engineers architect solutions that balance technical excellence, security-by-design, scalability, and your budget. Every design decision is documented and reviewed with you before we proceed.",
      deliverables: ["Solution Architecture", "Bill of Materials", "Project Timeline", "Investment Proposal"],
      icon: <Edit2 className="w-6 h-6 text-gray-700" />
    },
    {
      number: "03",
      title: "Deliver",
      subtitle: "Precision Implementation",
      description: "We deploy with military precision. You receive real-time progress updates, and we conduct rigorous pre-go-live testing. Nothing is handed over without complete as-built documentation that your team can rely on for years.",
      deliverables: ["Deployed Solution", "As-Built Documentation", "User Training", "Handover Checklist"],
      icon: <Rocket className="w-6 h-6 text-gray-700" />
    },
    {
      number: "04",
      title: "Support",
      subtitle: "Long-Term Partnership",
      description: "Our relationship doesn't end at handover. We offer proactive monitoring, SLA-backed maintenance, and continuous improvement services to ensure your investment delivers value long after go-live.",
      deliverables: ["SLA Dashboard Access", "Proactive Monitoring", "Quarterly Reviews", "Upgrade Planning"],
      icon: <Shield className="w-6 h-6 text-gray-700" />
    },
  ];

  return (
    <div className="pt-[72px] min-h-screen bg-white">
      {/* Hero Section - refined with gradient and depth */}
      <div className="relative overflow-hidden bg-gray-950">
        {/* Background textures */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-teal/10 via-transparent to-transparent" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-teal" />
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">
                Our Methodology
              </p>
            </div>
            <h1 className="font-primary text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Our Proven
              <span className="bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent"> Delivery Process</span>
            </h1>
            <p className="font-secondary text-gray-400 text-xl leading-relaxed max-w-xl">
              A four-phase methodology that ensures every project moves predictably from concept to completion, with complete transparency and godly integrity.
            </p>
          </div>
        </div>
        
        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Process Steps Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Timeline connector line (visible on desktop) */}
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-teal/20 via-brand-blue/20 to-transparent" />
            
            <div className="space-y-32 lg:space-y-40">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Alternating layout: left on even, right on odd */}
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                    index % 2 === 0 ? "lg:pr-12" : "lg:pl-12 lg:flex-row-reverse"
                  }`}>
                    {/* Content side */}
                    <div className={`${index % 2 !== 0 ? "lg:text-right lg:order-last" : ""}`}>
                      <div className="inline-flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 flex items-center justify-center text-2xl">
                          {step.icon}
                        </div>
                        <div className="h-px w-8 bg-brand-teal/30" />
                        <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">
                          {step.subtitle}
                        </p>
                      </div>
                      
                      <div className="flex items-baseline gap-4 mb-5">
                        <span className="font-primary text-6xl font-black text-gray-100">{step.number}</span>
                        <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900">
                          {step.title}
                        </h2>
                      </div>
                      
                      <p className="font-secondary text-gray-500 text-lg leading-relaxed mb-8">
                        {step.description}
                      </p>
                      
                      {/* Deliverables chip list */}
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable) => (
                          <span
                            key={deliverable}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-full text-xs font-medium text-gray-600 border border-gray-100"
                          >
                            <CheckCircle2 className="w-3 h-3 text-brand-teal" />
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Visual element / decorative side */}
                    <div className={`relative flex justify-center ${
                      index % 2 === 0 ? "lg:justify-start" : "lg:justify-end"
                    }`}>
                      <div className="relative w-full max-w-sm">
                        {/* Abstract shape */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 rounded-3xl blur-2xl" />
                        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                              <Sparkles className="w-5 h-5 text-brand-blue" />
                            </div>
                            <span className="text-sm font-mono text-brand-teal font-semibold">Phase {step.number}</span>
                          </div>
                          <div className="h-0.5 w-12 bg-brand-teal/40 mb-4" />
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {step.title === "Discover" && "Deep discovery to uncover true needs and hidden risks."}
                            {step.title === "Design" && "Blueprint for success with security and scalability embedded."}
                            {step.title === "Deliver" && "Flawless deployment with full documentation and training."}
                            {step.title === "Support" && "Long-term partnership with proactive care and SLAs."}
                          </p>
                          <div className="mt-4 flex justify-end">
                            <ChevronRight className="w-4 h-4 text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Connector dot on timeline (desktop only) */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 rounded-full bg-white border-2 border-brand-blue shadow-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA / trust section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
            </span>
            <span className="text-xs font-semibold text-gray-600">Proven by 200+ successful deliveries</span>
          </div>
          <h3 className="font-primary text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to start your transformation?
          </h3>
          <p className="font-secondary text-gray-500 max-w-md mx-auto mb-8">
            Let's discuss how our proven process can bring clarity and results to your next project.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-all shadow-md hover:shadow-lg"
          >
            Schedule a consultation
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
