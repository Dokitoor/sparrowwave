import { ServicePageTemplate } from "../../components/service-page-template";
export function ContactCentersPage() {
  return <ServicePageTemplate
    badge="Contact Center Design"
    title="Customer Service Infrastructure That Performs at Scale"
    subtitle="End-to-end contact center deployment with intelligent routing and omnichannel support."
    intro="Your contact center is where your brand promise meets reality. We design and deploy contact center solutions that equip your agents with the tools they need to serve customers brilliantly — with intelligent routing, real-time dashboards, quality assurance built in, and omnichannel capabilities across voice, email, chat, and social."
    benefits={["Reduce average handle time", "Improve first-call resolution rates", "Scale capacity easily during peak periods", "Gain real-time visibility into operations", "Support remote and hybrid agent workforces"]}
    features={[
      { title: "ACD & Skills-Based Routing", description: "Intelligent automatic call distribution that matches callers to the most skilled available agent every time." },
      { title: "Omnichannel Queuing", description: "A unified platform that handles voice, email, web chat, WhatsApp, and social media interactions in a single agent desktop." },
      { title: "Real-Time Dashboards", description: "Live wallboards and supervisor dashboards showing queue depth, agent status, SLA adherence, and key performance metrics." },
      { title: "Call Recording & QA", description: "Full call and screen recording with integrated quality assurance scoring to drive continuous agent improvement." },
      { title: "CRM Integration", description: "Screen-pop integrations with Salesforce, Zoho, HubSpot, and custom CRMs that give agents instant caller context." },
      { title: "Workforce Management", description: "Forecasting and scheduling tools that ensure you have the right number of agents available at the right times." },
    ]}
  />;
}
