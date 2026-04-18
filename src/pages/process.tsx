export function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      subtitle: "Understanding Your World",
      description: "Before we design a single solution, we take time to deeply understand your business. We conduct stakeholder interviews, review your current infrastructure, audit your workflows, and identify both the visible problems and the hidden risks.",
      deliverables: ["Needs Assessment Report", "Current State Analysis", "Risk Register", "Opportunity Mapping"]
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Engineering the Right Solution",
      description: "Armed with a thorough understanding of your needs, our engineers architect solutions that balance technical excellence, security-by-design, scalability, and your budget. Every design decision is documented and reviewed with you before we proceed.",
      deliverables: ["Solution Architecture", "Bill of Materials", "Project Timeline", "Investment Proposal"]
    },
    {
      number: "03",
      title: "Deliver",
      subtitle: "Precision Implementation",
      description: "We deploy with military precision. You receive real-time progress updates, and we conduct rigorous pre-go-live testing. Nothing is handed over without complete as-built documentation that your team can rely on for years.",
      deliverables: ["Deployed Solution", "As-Built Documentation", "User Training", "Handover Checklist"]
    },
    {
      number: "04",
      title: "Support",
      subtitle: "Long-Term Partnership",
      description: "Our relationship doesn't end at handover. We offer proactive monitoring, SLA-backed maintenance, and continuous improvement services to ensure your investment delivers value long after go-live.",
      deliverables: ["SLA Dashboard Access", "Proactive Monitoring", "Quarterly Reviews", "Upgrade Planning"]
    },
  ];

  return (
    <div className="pt-[72px] min-h-screen">
      <div className="py-24 px-6 lg:px-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-5">How We Work</p>
          <h1 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight">
            Our Proven Delivery Process
          </h1>
          <p className="font-secondary text-gray-400 text-xl max-w-xl leading-relaxed">
            A four-phase methodology that ensures every project moves predictably from concept to completion.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <div>
                  <div className="font-primary text-8xl font-bold text-gray-100 mb-4">{step.number}</div>
                  <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-3">{step.subtitle}</p>
                  <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900 mb-5">{step.title}</h2>
                  <p className="font-secondary text-gray-500 text-lg leading-relaxed">{step.description}</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h4 className="font-primary font-bold text-gray-900 mb-5 text-lg">Key Deliverables</h4>
                  <ul className="space-y-3">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-3 font-secondary text-gray-600">
                        <div className="w-6 h-6 rounded-full bg-brand-teal/15 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-brand-teal" />
                        </div>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
