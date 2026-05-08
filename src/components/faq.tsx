import { useState } from "react";
import { ChevronDown, HelpCircle, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "General",
    icon: HelpCircle,
    questions: [
      { q: "Where is Sparrowwave based?", a: "Sparrowwave is headquartered in Lagos, Nigeria, at No. 2 John Garaba Avenue, Soluyi, Ifako-Gbagada. We serve clients across Nigeria and West Africa." },
      { q: "What size of organisations do you work with?", a: "We work with a diverse range of organisations — from growing SMEs to large enterprises and government institutions. Our solutions are always tailored to your scale and budget." },
      { q: "Do you offer ongoing support after a project?", a: "Yes. We offer SLA-backed support packages that include proactive monitoring, helpdesk access, and scheduled maintenance. We see every engagement as a long-term partnership." },
    ]
  },
  {
    category: "Services",
    icon: MessageCircle,
    questions: [
      { q: "What is included in an IT Audit?", a: "Our IT audit covers a full review of your current infrastructure, software stack, security posture, network architecture, and operational processes. You receive a comprehensive report with prioritised findings and recommendations." },
      { q: "Can you integrate with our existing systems?", a: "Absolutely. Systems integration is one of our core competencies. Whether it's connecting your CRM, ERP, telephony, or third-party platforms, our engineers ensure seamless interoperability." },
      { q: "Do you design and install physical network infrastructure?", a: "Yes — cabling, switching, routing, Wi-Fi access points, server rooms, and data centres. We handle everything from design and BOQ to physical installation and configuration." },
    ]
  },
  {
    category: "Process",
    icon: Mail,
    questions: [
      { q: "How long does a typical project take?", a: "Timelines vary depending on scope. A network deployment may take 2-4 weeks, while a custom software project typically runs 3-6 months. We provide a detailed timeline during the Design phase." },
      { q: "How do you handle project communication?", a: "We assign a dedicated project manager to every engagement. You'll receive regular progress updates and have access to a shared project portal. We believe in radical transparency." },
      { q: "What happens if the scope changes mid-project?", a: "We manage scope changes formally via a Change Request process. Any impact on timeline, cost, or deliverables is communicated clearly and requires your written approval before we proceed." },
    ]
  }
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0 transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="font-primary font-semibold text-gray-900 text-lg pr-8 group-hover:text-brand-blue transition-colors duration-200">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 shrink-0 transition-all duration-300 ${
            open ? "rotate-180 text-brand-blue" : "group-hover:text-brand-blue"
          }`} 
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-secondary text-gray-500 leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-28 overflow-hidden bg-gray-50">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/5 via-transparent to-transparent" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1E3A8A 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-6 bg-brand-teal/50" />
            <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">
              Knowledge Base
            </p>
            <div className="h-px w-6 bg-brand-teal/50" />
          </div>
          <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2] tracking-tight mb-5">
            Frequently Asked Questions
          </h2>
          <p className="font-secondary text-lg text-gray-500 leading-relaxed">
            Everything you need to know about working with Sparrowwave.
          </p>
        </div>

        {/* FAQ Grid - three category cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {faqs.map((section) => (
            <div
              key={section.category}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Category header with icon */}
              <div className="px-6 pt-8 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h3 className="font-primary text-2xl font-bold text-gray-900">
                    {section.category}
                  </h3>
                </div>
              </div>
              
              {/* Accordion items */}
              <div className="px-6 pb-6">
                {section.questions.map((item) => (
                  <FaqItem key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA - still have questions */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-brand-blue" />
              </div>
              <span className="font-primary font-semibold text-gray-900">
                Still have questions?
              </span>
            </div>
            <div className="flex gap-3">
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full bg-brand-blue text-white font-secondary text-sm font-semibold hover:bg-brand-blue/90 transition-all shadow-md hover:shadow-lg"
              >
                Contact our team
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 font-secondary text-sm font-semibold hover:border-brand-blue/30 hover:text-brand-blue transition-all"
              >
                Visit support center
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
