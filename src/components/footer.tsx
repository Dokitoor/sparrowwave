import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const companyLinks = [
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Mission & Values", path: "/mission" },
  { name: "Our Process", path: "/process" },
];

const serviceLinks = [
  { name: "IT Consultancy", path: "/services/it-consultancy" },
  { name: "Custom Software", path: "/services/custom-software" },
  { name: "Network Infrastructure", path: "/services/network-design" },
  { name: "VoIP Solutions", path: "/services/voip" },
  { name: "Security", path: "/services/security" },
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/">
              <img src="/logo.svg" alt="Sparrowwave" className="h-9 w-auto mb-6 brightness-0 invert" />
            </Link>
            <p className="font-secondary text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Professional IT solutions delivering excellence through innovative technology, godly integrity, and unwavering commitment to client success.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-teal shrink-0" />
                <span className="font-secondary text-sm">No. 2 John Garaba Avenue, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <span className="font-secondary text-sm">07069023467</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-teal shrink-0" />
                <span className="font-secondary text-sm">info@sparrowwave.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-secondary text-white text-sm font-semibold mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="font-secondary text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-secondary text-white text-sm font-semibold mb-5 tracking-wide">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="font-secondary text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-secondary text-xs text-gray-500">
            © {new Date().getFullYear()} Sparrowwave IT Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="font-secondary text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="font-secondary text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
