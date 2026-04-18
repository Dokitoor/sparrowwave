import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-[76px] min-h-screen bg-white">
      {/* Page Header */}
      <div className="py-24 px-6 lg:px-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <p className="font-secondary text-sm font-semibold text-brand-teal tracking-widest uppercase mb-5">Get in Touch</p>
          <h1 className="font-primary text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight">
            Let's Discuss Your IT Infrastructure
          </h1>
          <p className="font-secondary text-gray-400 text-xl max-w-xl leading-relaxed">
            Our engineers and solution architects are ready to transform your operational workflows.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-primary text-3xl font-bold text-gray-900 mb-8">Contact Details</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-brand-blue/8 text-brand-blue rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-primary font-bold text-gray-900 mb-1">Email Us</h4>
                  <p className="font-secondary text-gray-500">info@sparrowwave.com</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-brand-blue/8 text-brand-blue rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-primary font-bold text-gray-900 mb-1">Call Us</h4>
                  <p className="font-secondary text-gray-500">07069023467</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-12 h-12 bg-brand-blue/8 text-brand-blue rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-primary font-bold text-gray-900 mb-1">Corporate Office</h4>
                  <p className="font-secondary text-gray-500 leading-relaxed">No. 2 John Garaba Avenue,<br/>Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will be in touch shortly.'); }}>
              <div>
                <label className="block font-secondary text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all font-secondary text-gray-800 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block font-secondary text-sm font-semibold text-gray-700 mb-2">Work Email</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all font-secondary text-gray-800 placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block font-secondary text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all resize-none font-secondary text-gray-800 placeholder:text-gray-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-all duration-200 font-secondary"
              >
                Discuss Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
