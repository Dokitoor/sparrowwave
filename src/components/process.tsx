export function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "We deeply understand your business objectives, technical environment, and success criteria before drawing a single diagram."
    },
    {
      number: "02",
      title: "Design",
      description: "Our engineers architect solutions balancing technical excellence, security-by-design, scalability, and your budget."
    },
    {
      number: "03",
      title: "Deliver",
      description: "Precise deployment with real-time progress updates, rigorous testing, and complete as-built documentation."
    },
    {
      number: "04",
      title: "Support",
      description: "Ongoing partnership with proactive monitoring, SLA-backed maintenance, and continuous improvement."
    }
  ];

  return (
    <section className="py-28 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-20">
          <div className="max-w-xl">
            <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-4">How We Operate</p>
            <h2 className="font-primary text-4xl md:text-5xl font-bold text-white leading-tight">
              Our Proven Delivery Process
            </h2>
          </div>
          <p className="font-secondary text-gray-400 text-lg max-w-sm leading-relaxed self-end">
            A systematic approach ensuring every project moves predictably from concept to completion.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="text-5xl font-primary font-bold text-white/10 mb-6 group-hover:text-brand-teal transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="font-primary text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="font-secondary text-gray-400 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
