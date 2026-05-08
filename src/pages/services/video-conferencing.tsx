import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Monitor, 
  Camera, 
  Mic, 
  Tv, 
  Cpu, 
  Activity,
  Sparkles,
  Zap
} from "lucide-react";

export function VideoConferencingPage() {
  const features = [
    { 
      title: "Room Design & Acoustics", 
      description: "Professional acoustic design and room layout optimisation to ensure every participant can see and be seen clearly.",
      icon: Monitor
    },
    { 
      title: "PTZ Camera Systems", 
      description: "Auto-tracking pan-tilt-zoom cameras that follow the active speaker automatically, removing the need for a camera operator.",
      icon: Camera
    },
    { 
      title: "4K Display & Projection", 
      description: "Dual 4K displays or laser projection systems sized for your room, delivering sharp, vivid video at any distance.",
      icon: Tv
    },
    { 
      title: "Beamforming Audio", 
      description: "Ceiling or table-top microphone arrays that pick up voices clearly from any seat in the room, eliminating dead spots.",
      icon: Mic
    },
    { 
      title: "Codec & Platform Integration", 
      description: "Native integration with Cisco Webex, Zoom Rooms, Microsoft Teams Rooms, and other enterprise platforms.",
      icon: Cpu
    },
    { 
      title: "Remote Room Monitoring", 
      description: "Centralised management and monitoring so your IT team can check room health and resolve issues remotely.",
      icon: Activity
    },
  ];

  const benefits = [
    "Crystal-clear 4K video and audio",
    "One-touch meeting join experience",
    "Works with Zoom, Teams, and Google Meet",
    "Remote control and diagnostics",
    "Purpose-built for Nigerian power environments",
  ];

  return (
    <div className="pt-[72px] min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-950">
        {/* Background image with sophisticated overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/video-conf.png"
            alt="Executive video conferencing room"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent" />
        </div>
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-teal" />
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">
                Video Conferencing Centers
              </p>
            </div>
            <h1 className="font-primary text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Executive Meeting Rooms That Command Respect
            </h1>
            <p className="font-secondary text-gray-300 text-xl leading-relaxed max-w-xl">
              State-of-the-art video conferencing facilities for enterprises and institutions — designed for clarity, reliability, and impact.
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
                Where technology meets professionalism
              </h2>
              <p className="font-secondary text-gray-500 text-lg leading-relaxed mb-8">
                Your meeting rooms are a direct reflection of your organisation's standards. We design and deploy video conferencing centres that combine beautiful room design with cutting-edge technology — PTZ cameras, 4K displays, beamforming microphone arrays, and seamless one-touch joining — so your team can focus on the meeting, not the technology.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-all duration-300 font-secondary group shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            
            <div>
              {/* Preview image */}
              <div className="rounded-2xl overflow-hidden shadow-xl mb-6 border border-gray-100">
                <img 
                  src="/images/video-conf.png" 
                  alt="Video conferencing room" 
                  className="w-full h-64 md:h-80 object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Benefits panel */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-brand-blue" />
                  <h3 className="font-primary font-bold text-gray-900">Key Benefits</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {benefits.map((benefit, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 p-2 rounded-lg"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                      <span className="font-secondary text-sm text-gray-700">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-6 bg-brand-teal/50" />
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">Capabilities</p>
              <div className="h-px w-6 bg-brand-teal/50" />
            </div>
            <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900">Complete Meeting Room Solutions</h2>
            <p className="font-secondary text-gray-500 text-lg mt-4">Every component engineered for flawless collaboration</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-brand-blue/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-5 h-5 text-brand-blue" />
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

      {/* CTA Section - elevated with gradient */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue/95 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-teal/20 via-transparent to-transparent" />
            
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to elevate your meeting experience?
              </h2>
              <p className="font-secondary text-blue-100 text-lg max-w-2xl mx-auto mb-8">
                Let's discuss your specific room requirements and design a video conferencing centre that impresses every visitor.
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
              <p className="text-xs text-blue-200/60 mt-6">Free consultation • On-site assessment available • 24-hour response</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
