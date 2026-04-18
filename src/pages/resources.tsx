import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

export function Resources() {
  const resources = [
    { title: "Case Studies", description: "Detailed stories of how we've helped real clients solve real problems — with measurable outcomes.", tag: "Coming Soon" },
    { title: "Blog & Insights", description: "Practical guides, technology explainers, and industry insights from the Sparrowwave engineering team.", tag: "Coming Soon" },
  ];

  return (
    <div className="pt-[72px] min-h-screen">
      <div className="py-24 px-6 lg:px-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-5">Resources</p>
          <h1 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight">
            Knowledge and Insight from Our Team
          </h1>
          <p className="font-secondary text-gray-400 text-xl max-w-xl leading-relaxed">
            We believe informed clients make better decisions. Our resource library is always growing.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="p-10 rounded-2xl border border-gray-100 bg-gray-50 hover:border-brand-blue/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 bg-brand-teal/10 rounded-full flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-teal" />
                    <span className="font-secondary text-xs text-brand-teal font-semibold">{resource.tag}</span>
                  </div>
                </div>
                <h2 className="font-primary text-3xl font-bold text-gray-900 mb-4">{resource.title}</h2>
                <p className="font-secondary text-gray-500 leading-relaxed mb-8">{resource.description}</p>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-colors font-secondary group text-sm">
                  Get Notified
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
