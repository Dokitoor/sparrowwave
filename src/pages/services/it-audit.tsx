import { ServicePageTemplate } from "../../components/service-page-template";

export function ITAudit() {
  return <ServicePageTemplate
    badge="IT Audit"
    title="Know Exactly Where You Stand"
    subtitle="A comprehensive assessment of your entire technology landscape."
    intro="You can't improve what you don't understand. Our IT Audit service gives you a clear, honest, and thorough picture of your entire technology environment — from infrastructure and security to software licencing and operational processes. The result is a prioritised action plan you can act on immediately."
    benefits={["Uncover hidden vulnerabilities and risks", "Identify compliance gaps", "Optimise software and licencing costs", "Establish performance baselines", "Receive a clear remediation roadmap"]}
    features={[
      { title: "Infrastructure Assessment", description: "A detailed review of your servers, network equipment, storage, and data centre facilities against industry standards." },
      { title: "Security Posture Review", description: "An evaluation of your security controls, policies, and configurations to identify weaknesses and compliance gaps." },
      { title: "Software & Licencing Audit", description: "We inventory your software estate to identify unused licences, compliance risks, and consolidation opportunities." },
      { title: "Network Performance Analysis", description: "Traffic analysis and capacity planning to identify bottlenecks and ensure your network is right-sized for your needs." },
      { title: "Process & Governance Review", description: "An assessment of your IT management processes, change management practices, and governance frameworks." },
      { title: "Benchmarking Report", description: "Your findings are benchmarked against industry peers so you can contextualise where you stand relative to best practice." },
    ]}
  />;
}
