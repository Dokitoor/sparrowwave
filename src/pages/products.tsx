import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Shield, Network, ChevronRight, Mail, Sparkles } from "lucide-react";

// ------- Data (unchanged) -------------

type Spec = { label: string; value: string };
type Product = {
  model: string;
  name: string;
  image: string;
  description: string;
  highlights: string[];
  specs: Spec[];
};
type Category = {
  id: string;
  label: string;
  icon: React.ElementType;
  tagline: string;
  products: Product[];
};

const categories: Category[] = [
  {
    id: "non-poe",
    label: "Non-PoE Switches",
    icon: Network,
    tagline: "Scalable switching from edge to data centre",
    products: [
      {
        model: "S1500-8T",
        name: "S1500 Series – 8-Port Unmanaged Switch",
        image: "/products/switch_s1500_8t.png",
        description:
          "Compact, fanless, plug-and-play gigabit switch ideal for small offices and surveillance deployments. Features 6KV lightning protection and a built-in DIP switch for VLAN/CCTV modes.",
        highlights: ["Fanless / silent", "6KV lightning protection", "DIP switch VLAN & CCTV mode", "8K MAC address table"],
        specs: [
          { label: "Ports", value: "8 × GE RJ45" },
          { label: "Switching Capacity", value: "16 Gbps" },
          { label: "Buffer", value: "4 MB" },
          { label: "MAC Table", value: "8K" },
          { label: "Form Factor", value: "Desktop / Fanless" },
        ],
      },
      {
        model: "S1500-24T2S",
        name: "S1500 Series – 24-Port + 2 SFP Unmanaged Switch",
        image: "/products/switch_s1500_24t.png",
        description:
          "High-port-density unmanaged gigabit switch with two SFP uplink slots for fibre connectivity. Perfect for surveillance, education, and small enterprise edge deployments.",
        highlights: ["Plug-and-play, zero config", "6KV lightning protection", "2 × SFP fibre uplinks", "52 Gbps backplane"],
        specs: [
          { label: "Ports", value: "24 × GE RJ45 + 2 × SFP" },
          { label: "Switching Capacity", value: "52 Gbps" },
          { label: "Buffer", value: "4 MB" },
          { label: "MAC Table", value: "8K" },
          { label: "Form Factor", value: "Desktop / Fanless" },
        ],
      },
      {
        model: "S2510-C / S2528-C",
        name: "S2500-C Series – Carrier-Level L2 Managed Switch",
        image: "/products/switch_s2500c.png",
        description:
          "Enterprise-grade Layer 2 managed switches designed for carrier and ISP deployments. Supports QinQ double-tagging, full VLAN management, and robust L2 redundancy protocols.",
        highlights: ["QinQ / double-tag VLAN", "Carrier-level reliability", "8K MAC address table", "128 MB DRAM"],
        specs: [
          { label: "Models", value: "S2510-C, S2518-C, S2528-C" },
          { label: "Max GE Ports", value: "24 × GE + 4 × GE SFP" },
          { label: "DRAM", value: "128 MB" },
          { label: "MAC Table", value: "8K" },
          { label: "Management", value: "CLI / Web / SNMP" },
        ],
      },
      {
        model: "S2900-24T4X",
        name: "S2900 Series – L3-Lite Managed Gigabit/10G Switch",
        image: "/products/switch_s2900.png",
        description:
          "Advanced L3-lite switch with 10G SFP+ uplinks and ERPS ring protection recovering in under 50ms. Supports static routing, VLAN, QoS, and rich L2 features for campus aggregation.",
        highlights: ["ERPS < 50ms ring recovery", "10G SFP+ uplinks", "Static L3 routing", "16K MAC table"],
        specs: [
          { label: "Models", value: "S2900-8T4X, S2900-24T4X, S2900-48T4X/6X" },
          { label: "Uplinks", value: "4 × 10G SFP+" },
          { label: "Backplane", value: "128 Gbps" },
          { label: "DRAM", value: "256 MB" },
          { label: "MAC Table", value: "16K" },
        ],
      },
      {
        model: "S3900-24T6X",
        name: "S3900 Series – Aggregation 10GE Switch",
        image: "/products/switch_s3900.png",
        description:
          "High-performance aggregation switch with BVSS virtual stacking and ISSU in-service software upgrades for zero-downtime maintenance. Ideal for enterprise core and metro aggregation.",
        highlights: ["BVSS virtual stacking", "ISSU zero-downtime upgrade", "12K IPv4 routing table", "32K MAC table"],
        specs: [
          { label: "Models", value: "S3900-24T6X, S3900-48T6X" },
          { label: "Uplinks", value: "6 × 10G SFP+" },
          { label: "IPv4 Routes", value: "12K" },
          { label: "MAC Table", value: "32K" },
          { label: "Stacking", value: "BVSS Virtual Stack" },
        ],
      },
      {
        model: "S5700-24ET6X",
        name: "S5700 Series – Next-Gen 2.5G Aggregation Switch",
        image: "/products/switch_s5700.png",
        description:
          "Next-generation multi-gigabit aggregation switch with 2.5G access ports — perfect for Wi-Fi 6/7 AP backhaul — and 40G QSFP+ uplinks for spine connectivity.",
        highlights: ["2.5G access ports for Wi-Fi 6/7", "40G QSFP+ uplinks", "2 GB DRAM", "480 Gbps capacity"],
        specs: [
          { label: "Models", value: "S5700-24ET6X, S5700-48ET4X2Q" },
          { label: "Access Ports", value: "24–48 × 2.5G" },
          { label: "Uplinks", value: "6 × 10G / 2 × 40G QSFP+" },
          { label: "Capacity", value: "480 Gbps" },
          { label: "DRAM", value: "2 GB" },
        ],
      },
      {
        model: "S5864HB / S5800-32C-E",
        name: "S5800 Series – Data Centre Top-of-Rack Switch",
        image: "/products/switch_s5800.png",
        description:
          "Ultra-high-density data centre switches supporting VxLAN, EVPN, and M-LAG for modern spine-leaf fabric architectures. Delivers up to 6.4 Tbps of switching capacity with built-in telemetry.",
        highlights: ["VxLAN / EVPN / M-LAG", "Up to 6.4 Tbps capacity", "Spine-Leaf architecture ready", "Network telemetry"],
        specs: [
          { label: "Models", value: "S5864HB, S5800-32C-E" },
          { label: "Max Ports", value: "48 × 10G + 4 × 100G" },
          { label: "Max Capacity", value: "6.4 Tbps" },
          { label: "MAC Table", value: "64K" },
          { label: "Protocols", value: "VxLAN, EVPN, M-LAG, MPLS" },
        ],
      },
    ],
  },
  {
    id: "chassis",
    label: "Chassis Switches",
    icon: Server,
    tagline: "Modular, carrier-grade core networking",
    products: [
      {
        model: "S9506",
        name: "S9500 Series – High-End Modular Chassis Switch",
        image: "/products/chassis_s9506.png",
        description:
          "Carrier-grade modular chassis switch designed for mission-critical core network deployments. Features a distributed architecture with hot-swappable control and power modules for continuous operation.",
        highlights: ["7-slot modular chassis", "Distributed forwarding architecture", "Redundant control & power modules", "Carrier-level reliability"],
        specs: [
          { label: "Model", value: "S9506" },
          { label: "Slots", value: "7 (line card)" },
          { label: "Architecture", value: "Distributed" },
          { label: "Redundancy", value: "Dual control + power" },
          { label: "Use Case", value: "Core / Carrier Network" },
        ],
      },
      {
        model: "S8500 Series",
        name: "S8500 Series – Core Chassis Switch",
        image: "/products/chassis_s8500.png",
        description:
          "High-density modular core switch with 100G/40G/10G line card support, hardware-based MPLS L3 VPN, and BVSS chassis virtualisation. Built for large enterprise and service provider core networks.",
        highlights: ["100G / 40G / 10G line cards", "BVSS chassis virtualisation", "MPLS L3 VPN", "Advanced QoS & traffic engineering"],
        specs: [
          { label: "Uplink Density", value: "100G / 40G / 10G" },
          { label: "Virtualisation", value: "BVSS" },
          { label: "MPLS", value: "L3 VPN, TE, LDP" },
          { label: "Protocols", value: "BGP, OSPF, IS-IS, PIM" },
          { label: "Use Case", value: "Enterprise Core / SP" },
        ],
      },
    ],
  },
  {
    id: "firewall",
    label: "Firewalls & Gateways",
    icon: Shield,
    tagline: "Unified threat protection for your network perimeter",
    products: [
      {
        model: "BIG2000-530",
        name: "BIG2000 Series – Converged Multi-Service Gateway",
        image: "/products/firewall_big2000.png",
        description:
          "All-in-one converged gateway built on a 64-bit ARM processor, combining next-generation firewall, VPN concentrator, wireless controller, and deep application intelligence (DPI) into a single appliance.",
        highlights: ["Next-gen firewall + ACL/NAT", "IPSec & SSL VPN", "Wireless AC controller (AP management)", "Deep Packet Inspection (DPI)"],
        specs: [
          { label: "Model", value: "BIG2000-530" },
          { label: "Processor", value: "64-bit ARM" },
          { label: "VPN", value: "IPSec / SSL" },
          { label: "Wireless", value: "AC Controller / AP Mgmt" },
          { label: "Security", value: "Firewall, NAT, DPI, ACL" },
        ],
      },
    ],
  },
];

// ------ ProductCard -----------

function ProductCard({ product }: { product: Product }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 hover:border-brand-blue/20 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
      {/* Image area with improved overlay */}
      <div className="relative bg-gradient-to-br from-gray-50 to-white border-b border-gray-100 overflow-hidden h-56 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <span className="absolute top-4 left-4 bg-brand-blue text-white font-secondary text-xs font-bold px-3 py-1.5 rounded-full tracking-wide shadow-md z-10">
          {product.model}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-primary text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-blue transition-colors">
          {product.name}
        </h3>
        <p className="font-secondary text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
          {product.description}
        </p>

        {/* Highlights as chips */}
        <div className="flex flex-wrap gap-2 mb-5">
          {product.highlights.slice(0, 3).map((h, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100">
              <span className="w-1 h-1 rounded-full bg-brand-teal" />
              {h}
            </span>
          ))}
          {product.highlights.length > 3 && (
            <span className="text-xs text-gray-400">+{product.highlights.length - 3} more</span>
          )}
        </div>

        {/* Specs toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 font-secondary text-sm font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors mt-auto w-fit"
        >
          <span>{expanded ? "Hide specifications" : "View technical specifications"}</span>
          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-90" : "group-hover:translate-x-0.5"}`} />
        </button>

        {expanded && (
          <div className="mt-4 rounded-xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
            <table className="w-full text-sm font-secondary">
              <tbody>
                {product.specs.map((s, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-2.5 font-semibold text-gray-700 w-2/5">{s.label}</td>
                    <td className="px-4 py-2.5 text-gray-500 font-mono text-xs">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-6 pt-2">
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 w-full py-3 border border-brand-blue/30 text-brand-blue font-secondary text-sm font-semibold rounded-xl hover:bg-brand-blue hover:text-white transition-all duration-300 group/btn"
        >
          <Mail className="w-4 h-4" />
          Request Quote
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

// ─── Main Page Component (redesigned) ─────────────────────────────────────────

export function Products() {
  const [active, setActive] = useState<string>(categories[0].id);
  const current = categories.find((c) => c.id === active)!;

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
                BDCOM Product Portfolio
              </p>
            </div>
            <h1 className="font-primary text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Enterprise-Grade Networking Hardware
            </h1>
            <p className="font-secondary text-gray-300 text-xl leading-relaxed max-w-2xl">
              Sparrowwave is an authorised reseller of BDCOM networking equipment via Jetra Limited — delivering switches, chassis systems, and firewalls engineered for reliability at every scale.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Category Tabs - elevated sticky */}
      <div className="sticky top-[72px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-thin">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === active;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-secondary text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-brand-blue text-white shadow-md shadow-brand-blue/20"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Category Intro - refined */}
      <section className="py-16 px-6 lg:px-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-brand-teal" />
              <span className="text-xs font-semibold text-brand-teal uppercase tracking-wider">Current selection</span>
            </div>
            <h2 className="font-primary text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {current.label}
            </h2>
            <p className="font-secondary text-gray-500 text-lg">{current.tagline}</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-secondary text-sm font-semibold rounded-full hover:bg-brand-blue/90 transition-all duration-300 shadow-md hover:shadow-lg group shrink-0"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Product Grid - with staggered animation effect */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {current.products.map((product, idx) => (
              <div key={product.model} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          {current.products.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400">No products available in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Purchase CTA Banner */}
      <section className="py-24 px-6 lg:px-8 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-teal/5 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
            </span>
            <span className="text-xs font-semibold text-brand-teal tracking-wide">Ready to purchase?</span>
          </div>
          <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Speak directly with our Sales team
          </h2>
          <p className="font-secondary text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Our experts will help you select the right hardware, confirm stock availability, and prepare a competitive quote tailored to your project.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-teal text-white font-secondary font-semibold rounded-full hover:bg-brand-teal/90 transition-all duration-300 shadow-lg shadow-brand-teal/20 group"
            >
              Contact Sales
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="mailto:info@sparrowwave.com"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-secondary font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              info@sparrowwave.com
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-6">Authorised BDCOM reseller • Fast shipping nationwide • Volume discounts available</p>
        </div>
      </section>
    </div>
  );
}
