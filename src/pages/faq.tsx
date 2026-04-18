import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "General",
    questions: [
      { q: "Where is Sparrowwave based?", a: "Sparrowwave is headquartered in Lagos, Nigeria, at No. 2 John Garaba Avenue, Soluyi, Ifako-Gbagada. We serve clients across Nigeria and West Africa." },
      { q: "What size of organisations do you work with?", a: "We work with a diverse range of organisations — from growing SMEs to large enterprises and government institutions. Our solutions are always tailored to your scale and budget." },
      { q: "Do you offer ongoing support after a project?", a: "Yes. We offer SLA-backed support packages that include proactive monitoring, helpdesk access, and scheduled maintenance. We see every engagement as a long-term partnership." },
    ]
  },
  {
    category: "Services",
    questions: [
      { q: "What is included in an IT Audit?", a: "Our IT audit covers a full review of your current infrastructure, software stack, security posture, network architecture, and operational processes. You receive a comprehensive report with prioritised findings and recommendations." },
      { q: "Can you integrate with our existing systems?", a: "Absolutely. Systems integration is one of our core competencies. Whether it's connecting your CRM, ERP, telephony, or third-party platforms, our engineers ensure seamless interoperability." },
      { q: "Do you design and install physical network infrastructure?", a: "Yes — cabling, switching, routing, Wi-Fi access points, server rooms, and data centres. We handle everything from design and BOQ to physical installation and configuration." },
    ]
  },
  {
    category: "Process",
    questions: [
      { q: "How long does a typical project take?", a: "Timelines vary depending on scope. A network deployment may take 2–4 weeks, while a custom software project typically runs 3–6 months. We provide a detailed timeline during the Design phase." },
      { q: "How do you handle project communication?", a: "We assign a dedicated project manager to every engagement. You'll receive regular progress updates and have access to a shared project portal. We believe in radical transparency." },
      { q: "What happens if the scope changes mid-project?", a: "We manage scope changes formally via a Change Request process. Any impact on timeline, cost, or deliverables is communicated clearly and requires your written approval before we proceed." },
    ]
  }
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="font-primary font-semibold text-gray-900 text-lg pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-6 pr-8">
          <p className="font-secondary text-gray-500 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <div className="pt-[72px] min-h-screen">
      <div className="py-24 px-6 lg:px-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-5">FAQ</p>
          <h1 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="font-secondary text-gray-400 text-xl max-w-xl leading-relaxed">
            Everything you need to know about working with Sparrowwave.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {faqs.map((section) => (
            <div key={section.category} className="mb-16">
              <h2 className="font-primary text-2xl font-bold text-brand-blue mb-6 pb-3 border-b border-gray-100">{section.category}</h2>
              <div>
                {section.questions.map((item) => (
                  <FaqItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
