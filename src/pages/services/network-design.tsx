import { ServicePageTemplate } from "../../components/service-page-template";
export function NetworkDesign() {
  return <ServicePageTemplate
    badge="Network Design & Deployment"
    title="Enterprise-Grade Connectivity, Engineered to Last"
    subtitle="LAN, WAN, and structured cabling solutions designed for reliability and scale."
    intro="Your network is the backbone of your entire IT infrastructure. A poorly designed network causes everything else to underperform. Our Network Design & Deployment team builds enterprise-grade networks that are reliable, secure, and ready to scale with your business."
    benefits={["Eliminate network bottlenecks and downtime", "Designed for security from the ground up", "Scalable architecture to grow with your business", "Full as-built documentation included", "24/7 SLA-backed support available"]}
    features={[
      { title: "LAN/WAN Design", description: "Logical and physical network design tailored to your site layout, user density, and performance requirements." },
      { title: "Structured Cabling", description: "CAT6/CAT6A and fibre optic cabling installed and certified to industry standards for maximum performance and longevity." },
      { title: "Campus Networking", description: "Multi-building campus networks with resilient links, centralised management, and granular access control." },
      { title: "SD-WAN Solutions", description: "Software-defined WAN for organisations with multiple sites — improving performance, reducing costs, and simplifying management." },
      { title: "Network Security", description: "Next-generation firewalls, network segmentation, and zero-trust implementation built into every design." },
      { title: "Monitoring & Management", description: "Centralised network monitoring with real-time alerts, traffic analytics, and remote management capabilities." },
    ]}
  />;
}
