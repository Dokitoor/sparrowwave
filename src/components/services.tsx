import { Code2, Network, Phone, ShieldCheck, Video, GraduationCap, Headphones, Lightbulb, Wifi, FileSearch } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe2 } from 'lucide-react';

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
    <section 
      id="services" 
      className="relative py-28 overflow-hidden"
    >
      {/* Global-tech background layer with subtle grid and gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/80 to-white" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #0F172A 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-blue/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-teal/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header + image row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3">
              <Globe2 className="w-5 h-5 text-brand-teal" />
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">
                Global Excellence
              </p>
            </div>
            <h2 className="font-primary text-4xl md:text-6xl font-bold text-gray-900 leading-[1.2] tracking-tight">
              Digital solutions that
              <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent"> transcend borders</span>
            </h2>
            <p className="font-secondary text-lg text-gray-500 leading-relaxed max-w-lg">
              We deliver enterprise-grade technologies that streamline operations and secure your infrastructure — from the network layer up to the application, worldwide.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-teal" />
                <span className="text-sm font-medium text-gray-600">Global 24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <span className="text-sm font-medium text-gray-600">99.99% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-sm font-medium text-gray-600">Certified Professionals</span>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue/30 to-brand-teal/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10 ring-1 ring-gray-200/50">
              <img
                src="/images/hero.png"
                alt="Sparrowwave engineers in a modern Lagos office environment"
                className="w-full h-72 lg:h-96 object-cover transform group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              className="group relative bg-white/300 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-blue/10 hover:-translate-y-1 border border-gray-200 hover:border-brand-blue/20"
            >
              {/* Subtle gradient accent on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 text-brand-blue flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:from-brand-blue group-hover:to-brand-teal group-hover:text-white shadow-sm">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="font-primary text-lg font-bold text-gray-900 mb-2 leading-tight tracking-tight">
                  {service.title}
                </h3>
                <p className="font-secondary text-sm text-gray-500 leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue font-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/5 text-gray-600 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
            </span>
            Deployed across countries worldwide | 500+ enterprise clients
          </div>
        </div>
      </div>
    </section>
  );
}
