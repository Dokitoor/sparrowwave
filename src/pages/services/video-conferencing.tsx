import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function VideoConferencingPage() {
  const features = [
    { title: "Room Design & Acoustics", description: "Professional acoustic design and room layout optimisation to ensure every participant can see and be seen clearly." },
    { title: "PTZ Camera Systems", description: "Auto-tracking pan-tilt-zoom cameras that follow the active speaker automatically, removing the need for a camera operator." },
    { title: "4K Display & Projection", description: "Dual 4K displays or laser projection systems sized for your room, delivering sharp, vivid video at any distance." },
    { title: "Beamforming Audio", description: "Ceiling or table-top microphone arrays that pick up voices clearly from any seat in the room, eliminating dead spots." },
    { title: "Codec & Platform Integration", description: "Native integration with Cisco Webex, Zoom Rooms, Microsoft Teams Rooms, and other enterprise platforms." },
    { title: "Remote Room Monitoring", description: "Centralised management and monitoring so your IT team can check room health and resolve issues remotely." },
  ];

  const benefits = [
    "Crystal-clear 4K video and audio",
    "One-touch meeting join experience",
    "Works with Zoom, Teams, and Google Meet",
    "Remote control and diagnostics",
    "Purpose-built for Nigerian power environments",
  ];

  return (
    <div className="pt-[72px] min-h-screen">
      {/* Hero with background image */}
      <div className="relative py-32 px-6 lg:px-8 overflow-hidden bg-gray-950 text-white">
        <img
          src="/images/video-conf.png"
          alt="Executive video conferencing room"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-5">Video Conferencing Centers</p>
          <h1 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight">
            Executive Meeting Rooms That Command Respect
          </h1>
          <p className="font-secondary text-gray-300 text-xl max-w-xl leading-relaxed">
            State-of-the-art video conferencing facilities for enterprises and institutions.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Overview</h2>
              <p className="font-secondary text-gray-500 text-lg leading-relaxed mb-8">
                Your meeting rooms are a direct reflection of your organisation's standards. We design and deploy video conferencing centres that combine beautiful room design with cutting-edge technology — PTZ cameras, 4K displays, beamforming microphone arrays, and seamless one-touch joining — so your team can focus on the meeting, not the technology.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-colors font-secondary group">
                Discuss Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
                <img src="/images/video-conf.png" alt="Video conferencing room" className="w-full h-72 object-cover" />
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
