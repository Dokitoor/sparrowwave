import { ServicePageTemplate } from "../../components/service-page-template";
export function VoIPPage() {
  return <ServicePageTemplate
    badge="VoIP / IP-PBX Systems"
    title="Modern Telephony That Works the Way Your Business Does"
    subtitle="Replace legacy PBX systems with intelligent, cost-saving IP telephony."
    intro="Traditional PSTN telephone systems are costly, inflexible, and increasingly obsolete. Our VoIP/IP-PBX service replaces your legacy infrastructure with a modern IP telephony platform that delivers crystal-clear voice quality, flexible call routing, and integration with your CRM and business tools — typically at 40–60% lower cost."
    benefits={["Reduce telephony costs by up to 60%", "Remote and mobile worker support", "CRM and helpdesk integration", "Advanced call routing and IVR", "Voicemail to email and call recording"]}
    features={[
      { title: "IP-PBX Platform Deployment", description: "We deploy and configure leading platforms including 3CX, Asterisk, and Cisco UCM, sized precisely for your organisation." },
      { title: "SIP Trunk Configuration", description: "Cost-effective SIP trunking that replaces your traditional ISDN lines and eliminates expensive inter-site call charges." },
      { title: "IVR & Auto-Attendant", description: "Professional auto-attendant menus that route callers efficiently and project a polished corporate image." },
      { title: "Unified Communications", description: "Integrations between your voice platform, video, instant messaging, and presence for a seamless communication experience." },
      { title: "IP Desk Phones & Softphones", description: "Supply and configuration of IP desk phones and softphone clients for desktop, mobile, and browser." },
      { title: "Migration with Zero Downtime", description: "Phased migration strategies that ensure your teams experience no disruption to business communications." },
    ]}
  />;
}
