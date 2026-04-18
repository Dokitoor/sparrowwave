import { ServicePageTemplate } from "../../components/service-page-template";
export function CustomSoftware() {
  return <ServicePageTemplate
    badge="Custom Software Development"
    title="Software Built Perfectly for Your Business"
    subtitle="Bespoke web apps, portals, and integrations using modern tech stacks."
    intro="Off-the-shelf software rarely fits every business perfectly. Our Custom Software Development team builds tailored solutions — from internal tools and customer portals to complex enterprise platforms — designed precisely around your workflows, users, and objectives."
    benefits={["Software that fits your exact processes", "Full ownership of your codebase", "Built for scalability from day one", "Seamless integration with existing tools", "Ongoing support and enhancement"]}
    features={[
      { title: "Web Application Development", description: "Full-stack web applications built with modern frameworks like React, Laravel, and Node.js for performance and maintainability." },
      { title: "Customer & Employee Portals", description: "Branded self-service portals that reduce operational overhead and improve the experience for your clients and staff." },
      { title: "API Development & Integration", description: "RESTful and GraphQL APIs that connect your systems, enabling seamless data flow across your organisation." },
      { title: "Database Architecture", description: "Expert design of relational and non-relational databases to ensure your data is secure, performant, and scalable." },
      { title: "Dashboard & Reporting Tools", description: "Custom analytics dashboards that surface the insights your team needs to make faster, better decisions." },
      { title: "Legacy System Modernisation", description: "We migrate and modernise legacy codebases without disrupting your operations, reducing technical debt and risk." },
    ]}
  />;
}
