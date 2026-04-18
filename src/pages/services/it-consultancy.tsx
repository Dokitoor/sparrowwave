import { ServicePageTemplate } from "../../components/service-page-template";

export function ITConsultancy() {
  return <ServicePageTemplate
    badge="IT Consultancy & Strategy"
    title="Navigate Your Digital Future with Confidence"
    subtitle="Strategic IT roadmaps and architecture reviews tailored to your goals."
    intro="Many organisations struggle to bridge the gap between their business goals and their technology capabilities. Our IT Consultancy & Strategy service exists to close that gap. We work alongside your leadership team to understand your vision, assess your current technology landscape, and build a clear, actionable roadmap for the future."
    benefits={["Align IT investment with business outcomes", "Reduce wasted spend on misaligned technologies", "Build a scalable, future-proof architecture", "Gain vendor-neutral, independent expertise", "Accelerate digital transformation initiatives"]}
    features={[
      { title: "IT Strategy Development", description: "We craft multi-year IT roadmaps that align technology investment with your business objectives and board-level vision." },
      { title: "Architecture Review", description: "An independent assessment of your current systems, identifying risks, inefficiencies, and opportunities for modernisation." },
      { title: "Digital Transformation Planning", description: "We help you plan and sequence your transformation journey to minimise disruption and maximise ROI." },
      { title: "Technology Selection", description: "Unbiased guidance on selecting the right platforms, vendors, and technologies for your unique context." },
      { title: "Governance & Policy", description: "We establish frameworks, policies, and governance structures that ensure IT is managed responsibly and effectively." },
      { title: "Business Case Development", description: "We help you build compelling, financially-grounded business cases to secure board approval for technology investments." },
    ]}
  />;
}
