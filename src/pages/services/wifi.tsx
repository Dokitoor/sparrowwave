import { ServicePageTemplate } from "../../components/service-page-template";
export function WiFiPage() {
  return <ServicePageTemplate
    badge="High-Density Wi-Fi"
    title="Seamless Wireless Coverage, Everywhere You Need It"
    subtitle="Enterprise Wi-Fi designed for high-density environments and demanding users."
    intro="Whether you're deploying Wi-Fi across a hospital, university campus, hotel, or office complex, our High-Density Wi-Fi solutions deliver consistent, fast, and secure wireless connectivity. We use industry-leading equipment from Cisco, Aruba, and Ubiquiti, engineered specifically for your environment."
    benefits={["Consistent speeds across all areas", "Support for high user and device density", "Seamless roaming between access points", "Centralised cloud or on-premise management", "Guest and BYOD network isolation"]}
    features={[
      { title: "RF Site Survey", description: "A professional site survey that maps signal propagation and identifies optimal access point placement for seamless coverage." },
      { title: "High-Density AP Deployment", description: "Purpose-built access points designed for environments with hundreds of concurrent devices per floor." },
      { title: "Wireless Security", description: "WPA3 encryption, 802.1X authentication, and rogue AP detection to keep your wireless environment secure." },
      { title: "Captive Portal & Hotspot", description: "Branded guest portals with social login, time limits, and bandwidth controls for hotels, lounges, and public spaces." },
      { title: "Wi-Fi Analytics", description: "Location analytics and heatmaps that give you insight into how your spaces are being used." },
      { title: "Ongoing Optimisation", description: "Regular RF audits and configuration tuning to ensure performance keeps pace as your environment evolves." },
    ]}
  />;
}
