import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServicePageProps {
  badge: string;
  title: string;
  subtitle: string;
  intro: string;
  features: { title: string; description: string }[];
  benefits: string[];
}

export function ServicePageTemplate({ badge, title, subtitle, intro, features, benefits }: ServicePageProps) {
  return (
    <div className="pt-[72px] min-h-screen">
      <div className="py-24 px-6 lg:px-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-5">{badge}</p>
          <h1 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight">{title}</h1>
          <p className="font-secondary text-gray-400 text-xl max-w-xl leading-relaxed">{subtitle}</p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Overview</h2>
              <p className="font-secondary text-gray-500 text-lg leading-relaxed">{intro}</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-colors font-secondary group">
                Discuss Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="space-y-2">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-brand-blue/20 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className="font-secondary text-gray-700 font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900 mb-12">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-brand-blue/20 hover:shadow-md transition-all duration-300">
                <h3 className="font-primary text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="font-secondary text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="font-secondary text-gray-500 text-lg mb-8">Let's discuss your specific requirements and put together a tailored proposal.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-colors font-secondary group">
            Book a Discovery Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
