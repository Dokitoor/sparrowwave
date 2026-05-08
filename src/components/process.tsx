import { 
  Compass, 
  PenTool, 
  Rocket, 
  LifeBuoy,
  ArrowRight
} from 'lucide-react';

// Step data with icons
const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We deeply understand your business objectives, technical environment, and success criteria before drawing a single diagram.",
    icon: Compass,
    color: "from-brand-blue to-cyan-400"
  },
  {
    number: "02",
    title: "Design",
    description: "Our engineers architect solutions balancing technical excellence, security-by-design, scalability, and your budget.",
    icon: PenTool,
    color: "from-indigo-500 to-brand-teal"
  },
  {
    number: "03",
    title: "Deliver",
    description: "Precise deployment with real-time progress updates, rigorous testing, and complete as-built documentation.",
    icon: Rocket,
    color: "from-brand-teal to-emerald-400"
  },
  {
    number: "04",
    title: "Support",
    description: "Ongoing partnership with proactive monitoring, SLA-backed maintenance, and continuous improvement.",
    icon: LifeBuoy,
    color: "from-amber-500 to-orange-400"
  }
];

export function Process() {
  return (
    <section className="relative py-28 overflow-hidden bg-gray-950">

      {/* Background depth with radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-brand-teal" />
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">
                The Sparrowwave Way
              </p>
            </div>
            <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] tracking-tight">
              A process built for
              <span className="bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent"> predictable success</span>
            </h2>
          </div>
          <div className="max-w-sm text-right">
            <p className="font-secondary text-gray-400 text-lg leading-relaxed border-l-2 border-brand-teal/40 pl-6">
              A systematic, transparent approach ensuring every project moves predictably from concept to global scale.
            </p>
          </div>
        </div>

        {/* Steps - modern timeline with visual connectors */}
        <div className="relative">

          {/* Desktop connector line (visible on lg+) */}
          <div className="absolute top-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="group relative">

                {/* Step card with glassmorphism and hover effects */}
                <div className="relative bg-white/[0.02] rounded-2xl p-6 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-blue/5 hover:-translate-y-1">

                  {/* Icon + number row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`
                      w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} 
                      flex items-center justify-center shadow-lg shadow-brand-blue/20
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-4xl font-primary font-black text-white/5 group-hover:text-white/10 transition-colors duration-300">
                      {step.number}
                    </div>
                  </div>
                  
                  <h3 className="font-primary text-xl font-bold text-white mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-secondary text-gray-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                  
                </div>
                
                {/* Connector dot on desktop (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-3 w-2 h-2 rounded-full bg-brand-teal/40 group-hover:bg-brand-teal transition-colors duration-300" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
