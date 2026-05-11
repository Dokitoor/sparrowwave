import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen, Newspaper, Sparkles } from "lucide-react";

export function Resources() {
  const resources = [
    { 
      title: "Case Studies", 
      description: "Detailed stories of how we've helped real clients solve real problems — with measurable outcomes, challenges overcome, and ROI delivered.", 
      tag: "Coming Soon",
      icon: BookOpen,
      color: "from-brand-blue/10 to-brand-teal/10"
    },
    { 
      title: "Blog & Insights", 
      description: "Practical guides, technology explainers, and industry insights from the Sparrowwave engineering team — helping you stay ahead of the curve.", 
      tag: "Coming Soon",
      icon: Newspaper,
      color: "from-brand-teal/10 to-brand-blue/10"
    },
  ];

  return (
    <div className="pt-[72px] min-h-screen bg-white">
      {/* Hero Section - refined with gradient and pattern */}
      <div className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-teal/10 via-transparent to-transparent" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-teal" />
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">
                Resource Library
              </p>
            </div>
            <h1 className="font-primary text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Knowledge and Insight From Our Team
            </h1>
            <p className="font-secondary text-gray-300 text-xl leading-relaxed max-w-xl">
              We believe informed clients make better decisions. Our resource library is always growing with practical guides, case studies, and industry insights.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Resources Grid Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-brand-teal/50" />
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">Coming Soon</p>
              <div className="h-px w-6 bg-brand-teal/50" />
            </div>
            <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900">Launching soon</h2>
            <p className="font-secondary text-gray-500 text-lg mt-4">Be the first to access valuable content when we launch</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-gray-50 rounded-3xl border border-teal-100 hover:border-brand-blue/20 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  
                  <div className="relative p-10">
                    {/* Icon + tag row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-brand-blue" />
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-100">
                        <Clock className="w-3.5 h-3.5 text-amber-600" />
                        <span className="font-secondary text-xs font-semibold text-amber-700">{resource.tag}</span>
                      </div>
                    </div>
                    
                    <h2 className="font-primary text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-blue transition-colors">
                      {resource.title}
                    </h2>
                    <p className="font-secondary text-gray-500 leading-relaxed mb-8">
                      {resource.description}
                    </p>
                    
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-all duration-300 font-secondary text-sm shadow-md hover:shadow-lg group/btn"
                    >
                      Get Notified
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                  
                  {/* Bottom decorative accent */}
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Early Access Notice Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6">
            <Sparkles className="w-4 h-4 text-brand-teal" />
            <span className="text-xs font-semibold text-gray-600">Early access program</span>
          </div>
          <h3 className="font-primary text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Want to contribute or collaborate?
          </h3>
          <p className="font-secondary text-gray-500 max-w-md mx-auto">
            We're looking for industry experts to contribute guest articles and case study partners. Reach out to our team.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 mt-6 text-brand-blue font-semibold hover:gap-3 transition-all"
          >
            Become a contributor
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Section - subtle */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="relative rounded-3xl bg-gray-900 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-teal/20" />
            <div className="relative px-8 py-16 md:py-20">
              <h2 className="font-primary text-2xl md:text-3xl font-bold text-white mb-3">
                Don't miss our launch
              </h2>
              <p className="font-secondary text-gray-300 max-w-md mx-auto mb-8">
                Subscribe to get notified when new case studies and articles are published.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md"
              >
                Get notified
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
