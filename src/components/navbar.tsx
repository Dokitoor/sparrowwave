import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown, Building2, Target, GitBranch, MessageSquare, Code2, Network, Phone, ShieldCheck, Video, GraduationCap, Headphones, Wifi, Lightbulb, FileSearch } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const companyLinks = [
  { name: "About Us", path: "/about", icon: Building2 },
  { name: "Mission & Values", path: "/mission", icon: Target },
  { name: "Our Process", path: "/process", icon: GitBranch },
  { name: "FAQ", path: "/faq", icon: MessageSquare },
];

const serviceLinks = [
  { name: "IT Consultancy & Strategy", path: "/services/it-consultancy", icon: Lightbulb },
  { name: "IT Audit", path: "/services/it-audit", icon: FileSearch },
  { name: "Security Assessments", path: "/services/security", icon: ShieldCheck },
  { name: "Custom Software", path: "/services/custom-software", icon: Code2 },
  { name: "Network Design", path: "/services/network-design", icon: Network },
  { name: "High-Density Wi-Fi", path: "/services/wifi", icon: Wifi },
  { name: "VoIP / IP-PBX", path: "/services/voip", icon: Phone },
  { name: "Contact Centers", path: "/services/contact-centers", icon: Headphones },
  { name: "Video Conferencing", path: "/services/video-conferencing", icon: Video },
  { name: "Remote Classrooms", path: "/services/remote-classrooms", icon: GraduationCap },
];

function DropdownMenu({ label, items, columns = 1 }: { label: string; items: { name: string; path: string; icon: React.ElementType }[]; columns?: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors font-secondary"
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className={`absolute top-full left-0 mt-3 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 w-64 ${columns === 2 ? "w-[480px] grid grid-cols-2 gap-1" : ""}`}>
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-sm text-gray-700 hover:text-brand-blue transition-colors font-secondary group"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-blue/5 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/10 transition-colors">
                <item.icon className="w-4 h-4 text-brand-blue" />
              </div>
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white border-b border-gray-100"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">

          {/* Logo — bigger */}
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo.svg" alt="Sparrowwave" className="h-14 w-auto" />
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7 font-secondary">
            <DropdownMenu label="Company" items={companyLinks} />
            <DropdownMenu label="Services" items={serviceLinks} columns={2} />
            <NavLink
              to="/solutions"
              className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors"
            >
              Solutions
            </NavLink>
            <NavLink
              to="/resources"
              className="text-sm font-medium text-gray-600 hover:text-brand-blue transition-colors"
            >
              Resources
            </NavLink>
            <Link
              to="/contact"
              className="ml-2 px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-full hover:bg-brand-blue/90 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-brand-blue focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg font-secondary max-h-[80vh] overflow-y-auto">
          <div className="px-6 pt-2 pb-6 space-y-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 pt-3 pb-1">Company</p>
            {companyLinks.map((link) => (
              <NavLink key={link.path} to={link.path} onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? "bg-brand-blue/5 text-brand-blue" : "text-gray-600 hover:bg-gray-50"}`}>
                {link.name}
              </NavLink>
            ))}
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest px-4 pt-3 pb-1">Services</p>
            {serviceLinks.map((link) => (
              <NavLink key={link.path} to={link.path} onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? "bg-brand-blue/5 text-brand-blue" : "text-gray-600 hover:bg-gray-50"}`}>
                {link.name}
              </NavLink>
            ))}
            <NavLink to="/solutions" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">Solutions</NavLink>
            <NavLink to="/resources" onClick={() => setIsOpen(false)} className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">Resources</NavLink>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block mt-4 w-full text-center px-5 py-3 bg-brand-blue text-white text-sm font-semibold rounded-full hover:bg-brand-blue/90 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
