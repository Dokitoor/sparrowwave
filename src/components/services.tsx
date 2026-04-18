import { Code2, Network, Phone, ShieldCheck, Video, GraduationCap, Headphones, Lightbulb, Wifi, FileSearch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  { icon: Lightbulb, title: "IT Consultancy & Strategy", description: "Strategic IT roadmaps, digital transformation plans, and vendor selection tailored to your goals.", path: "/services/it-consultancy" },
  { icon: FileSearch, title: "IT Audit", description: "A comprehensive assessment of your infrastructure, security posture, and software landscape — with a clear remediation plan.", path: "/services/it-audit" },
  { icon: Code2, title: "Custom Software Development", description: "Tailored web applications, integrations, and enterprise portals built with modern stacks.", path: "/services/custom-software" },
  { icon: Network, title: "Network Design & Deployment", description: "Enterprise-grade LAN, WAN, and structured cabling designed for reliability and scalability.", path: "/services/network-design" },
  { icon: Phone, title: "VoIP / IP-PBX Systems", description: "Modern IP telephony delivering up to 60% savings — remote-work ready and fully integrated.", path: "/services/voip" },
  { icon: ShieldCheck, title: "Security Assessment", description: "Vulnerability assessments, penetration testing, and security hardening to protect your data and meet compliance.", path: "/services/security" },
  { icon: Video, title: "Video Conferencing Centers", description: "PTZ cameras, 4K displays, and beamforming audio — state-of-the-art rooms for executives and teams.", path: "/services/video-conferencing" },
  { icon: GraduationCap, title: "Remote Video Classrooms", description: "Hybrid learning environments with interactive whiteboards, lecture capture, and auto-tracking cameras.", path: "/services/remote-classrooms" },
  { icon: Headphones, title: "Contact Center Design", description: "End-to-end contact center deployment with intelligent routing and omnichannel capabilities.", path: "/services/contact-centers" },
  { icon: Wifi, title: "High-Density Wi-Fi", description: "Seamless enterprise-grade wireless coverage for campuses, hospitals, hotels, and offices.", path: "/services/wifi" },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header + image row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-4">Our Expertise</p>
            <h2 className="font-primary text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Comprehensive Digital Solutions
            </h2>
            <p className="font-secondary text-lg text-gray-500 leading-relaxed">
              We deliver enterprise-grade technologies that streamline operations and secure your infrastructure — from the network layer up to the application.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-brand-blue/10 h-64 lg:h-80">
            <img
              src="/images/datacenter.png"
              alt="Network engineer in a data center"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="bg-white p-7 hover:bg-brand-blue/[0.02] transition-colors duration-300 group col-span-1"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-blue/8 text-brand-blue flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="font-primary text-base font-bold text-gray-900 mb-2 leading-snug">{service.title}</h3>
              <p className="font-secondary text-xs text-gray-500 leading-relaxed mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue font-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
