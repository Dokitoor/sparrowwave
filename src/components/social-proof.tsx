import { Quote } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      quote: "Sparrowwave absolutely transformed our legacy infrastructure. The transition to their custom VoIP solution reduced our overheads by 40%.",
      author: "Director of IT",
      company: "Leading Healthcare Provider"
    },
    {
      quote: "Their commitment to 'Security by Design' is not a gimmick. After their comprehensive IT audit, our threat vulnerability dropped to zero.",
      author: "Chief Operations Officer",
      company: "Financial Services Firm"
    }
  ];

  const clients = ["UNILAG", "LSG", "ZNB", "NB", "SNH", "RCCG", "CU", "MTN"];

  return (
    <section className="py-0 bg-white">
      {/* Full-width image strip */}
      <div className="relative h-72 overflow-hidden">
        <img
          src="/images/team.png"
          alt="Sparrowwave team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-blue/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-secondary text-sm font-semibold text-white/60 tracking-widest uppercase text-center">
            Trusted by leading organisations across education, healthcare,<br/> government, and enterprise in Nigeria
          </p>
        </div>
      </div>

      <div className="py-28 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Client logos */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mb-20 pb-20 border-b border-gray-200">
            {clients.map((client) => (
              <span
                key={client}
                className="font-primary text-2xl md:text-3xl font-bold text-gray-200 hover:text-gray-400 transition-colors duration-300 cursor-default select-none"
              >
                {client}
              </span>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                <Quote className="w-8 h-8 text-brand-blue/10 absolute top-8 right-8" />
                <p className="font-secondary text-lg text-gray-600 leading-relaxed mb-8 italic">
                  "{test.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center font-primary font-bold text-white text-sm">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-primary font-bold text-gray-900 text-sm">{test.author}</p>
                    <p className="font-secondary text-xs text-brand-teal font-medium tracking-wide uppercase">{test.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
