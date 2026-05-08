import { Mail, MapPin, Phone, Linkedin, Twitter, Github, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const companyLinks = [
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Mission & Values", path: "/mission" },
  { name: "Our Process", path: "/process" },
  { name: "FAQ", path: "/faq" },
];

const serviceLinks = [
  { name: "IT Consultancy", path: "/services/it-consultancy" },
  { name: "Custom Software", path: "/services/custom-software" },
  { name: "Network Infrastructure", path: "/services/network-design" },
  { name: "VoIP Solutions", path: "/services/voip" },
  { name: "Security", path: "/services/security" },
];

// const resourceLinks = [
//   // { name: "Case Studies", path: "/resources/case-studies" },
//   // { name: "Blog & Insights", path: "/resources/blog" },
  // { name: "FAQ", path: "/faq" },
//   // { name: "Support", path: "/support" },
// ];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-teal/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Brand column - spans 2 on large screens */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.svg" alt="Sparrowwave" className="h-10 w-auto brightness-0 invert hover:opacity-80 transition-opacity" />
            </Link>
            <p className="font-secondary text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              Professional IT solutions delivering excellence through innovative technology, godly integrity, and unwavering commitment to client success.
            </p>
            
            {/* Contact details as clean list */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 group">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5 group-hover:text-brand-blue transition-colors" />
                <span className="font-secondary text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  No. 2 John Garaba Avenue, Soluyi, Ifako-Gbagada, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-brand-teal shrink-0 group-hover:text-brand-blue transition-colors" />
                <span className="font-secondary text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  +234 706 902 3467
                </span>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="w-4 h-4 text-brand-teal shrink-0 group-hover:text-brand-blue transition-colors" />
                <span className="font-secondary text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  info@sparrowwave.com
                </span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-secondary text-white text-sm font-semibold mb-5 tracking-wide uppercase">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="font-secondary text-sm text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-secondary text-white text-sm font-semibold mb-5 tracking-wide uppercase">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="font-secondary text-sm text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter column */}
          <div>
            {/* <h4 className="font-secondary text-white text-sm font-semibold mb-5 tracking-wide uppercase">Resources</h4> */}
            {/* <ul className="space-y-2.5 mb-6">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="font-secondary text-sm text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-0.5 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul> */}
            
            {/* Social media icons */}
            <h4 className="font-secondary text-white text-sm font-semibold mb-5 tracking-wide uppercase">Social Handles</h4>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-white transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter signup row - below main grid */}
        <div className="py-10 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-primary text-white text-lg font-semibold mb-2">Subscribe to our newsletter</h4>
              <p className="font-secondary text-gray-400 text-sm">Get the latest insights, case studies, and tech updates directly in your inbox.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="work@email.com"
                required
                className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-brand-teal transition-colors font-secondary text-sm"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue/90 transition-all duration-300 group"
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
                {!subscribed && <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />}
              </button>
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-secondary text-xs text-gray-500">
            © {new Date().getFullYear()} Sparrowwave IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="font-secondary text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="font-secondary text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="font-secondary text-xs text-gray-500 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
