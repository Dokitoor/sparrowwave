import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

export function Solutions() {
  const solutions = [
    { title: "Unified Communications", description: "A fully integrated communications platform combining voice, video, messaging, and collaboration in one seamless experience.", path: "/solutions/unified-comms" },
    { title: "Managed Services", description: "Outsource your IT operations to a dedicated team of engineers who proactively manage and support your entire technology estate.", path: "/solutions/managed-services" },
    { title: "IT Infrastructure", description: "End-to-end IT infrastructure planning, deployment, and optimisation — from servers and storage to networking and cloud.", path: "/solutions/it-infrastructure" },
    { title: "Digital Transformation", description: "A holistic programme to reimagine your business processes, customer experiences, and operations through technology.", path: "/solutions/digital-transformation" },
  ];

  return (
    <div className="pt-[72px] min-h-screen">
      <div className="py-24 px-6 lg:px-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-5">Solutions</p>
          <h1 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight">
            Integrated Solutions for Every Challenge
          </h1>
          <p className="font-secondary text-gray-400 text-xl max-w-xl leading-relaxed">
            Beyond individual services, we offer comprehensive solution packages designed to solve complex, interconnected business challenges.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="p-8 rounded-2xl border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-brand-teal/10 rounded-full flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-teal" />
                    <span className="font-secondary text-xs text-brand-teal font-semibold">Coming Soon</span>
                  </div>
                </div>
                <h2 className="font-primary text-2xl font-bold text-gray-900 mb-3">{solution.title}</h2>
                <p className="font-secondary text-gray-500 leading-relaxed mb-6">{solution.description}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-brand-blue font-semibold font-secondary text-sm group-hover:gap-3 transition-all">
                  Register Interest <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
