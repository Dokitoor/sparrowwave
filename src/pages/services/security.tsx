import { ServicePageTemplate } from "../../components/service-page-template";

export function SecurityPage() {
  return <ServicePageTemplate
    badge="Security Assessments"
    title="Eliminate Vulnerabilities Before Attackers Do"
    subtitle="Penetration testing, threat assessments, and security hardening."
    intro="In an era of relentless cyber threats, a reactive approach to security is no longer sufficient. Our Security Assessment service takes a proactive stance — identifying and closing vulnerabilities before they can be exploited. From penetration testing to policy review, we've got every angle covered."
    benefits={["Identify real-world attack vectors", "Meet regulatory compliance requirements", "Test your incident response capabilities", "Protect sensitive client and business data", "Build a culture of security awareness"]}
    features={[
      { title: "Penetration Testing", description: "Authorised simulated attacks on your systems to identify and validate vulnerabilities before malicious actors do." },
      { title: "Vulnerability Assessment", description: "Systematic scanning and analysis of your systems to identify known vulnerabilities and misconfigurations." },
      { title: "Security Hardening", description: "We configure your systems, networks, and endpoints to close documented vulnerabilities and enforce security best practices." },
      { title: "Phishing Simulations", description: "Test your employees' susceptibility to phishing attacks and deliver targeted security awareness training." },
      { title: "Compliance Gap Analysis", description: "Assess your compliance posture against standards such as ISO 27001, NDPR, and PCI-DSS and receive a clear remediation plan." },
      { title: "Incident Response Planning", description: "We help you prepare a comprehensive incident response plan so your team knows exactly what to do when an incident occurs." },
    ]}
  />;
}
