import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, Shield, Zap } from "lucide-react";

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
    <div className="pt-[72px] min-h-screen bg-white">
      {/* Hero Section - refined with gradient and subtle texture */}
      <div className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-teal/10 via-transparent to-transparent" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-teal" />
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">
                {badge}
              </p>
            </div>
            <h1 className="font-primary text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              {title}
            </h1>
            <p className="font-secondary text-gray-400 text-xl leading-relaxed max-w-xl">
              {subtitle}
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Overview Section - with benefits panel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Overview</span>
              </div>
              <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Why choose this service
              </h2>
              <p className="font-secondary text-gray-500 text-lg leading-relaxed mb-8">
                {intro}
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-all duration-300 font-secondary group shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-brand-blue" />
                <h3 className="font-primary font-bold text-gray-900">Key Benefits</h3>
              </div>
              <div className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:border-brand-blue/20 transition-all duration-200 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0 group-hover:bg-brand-teal transition-colors duration-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-secondary text-gray-700 font-medium text-sm md:text-base">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - refined cards */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-brand-teal/50" />
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">Capabilities</p>
              <div className="h-px w-6 bg-brand-teal/50" />
            </div>
            <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900">What's Included</h2>
            <p className="font-secondary text-gray-500 text-lg mt-4">Comprehensive coverage of everything you need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-brand-blue/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-primary text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="font-secondary text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - elevated */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue/95 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-teal/20 via-transparent to-transparent" />
            
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to get started?
              </h2>
              <p className="font-secondary text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                Let's discuss your specific requirements and put together a tailored proposal that fits your goals and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-blue font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 font-secondary shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:border-white/70 hover:bg-white/10 transition-all duration-300 font-secondary hover:-translate-y-0.5"
                >
                  Request a Quote
                </Link>
              </div>
              <p className="text-xs text-blue-200/60 mt-6">Free consultation • No obligation • 24-hour response</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
