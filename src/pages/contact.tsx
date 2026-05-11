import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Linkedin, Twitter, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { apiFetch } from "@/lib/api";
import Swal from "sweetalert2";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  // handles form submission with basic validation and feedback
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // basic client-side validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus({ type: "error", message: "Please fill out all required fields." });
      return;
    }

    setStatus({ type: "loading", message: "Sending..." });
    
    try {

      // send form data to backend API
      const res = await apiFetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      // attempt to parse response data, but don't fail if it's not JSON
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {

        // try to parse error message from response, fallback to status text
        // const data = await res.json().catch(() => ({}));
        // throw new Error(data?.message || `Server returned ${res.status}`);
        
        const errorMessage = data?.message || `Server returned ${res.status}`;
        const errors = data?.errors;
        const errorText = errors ? Object.values(errors).flat().join(' ') : errorMessage;

        // set status error display
        setStatus({ type: "error", message: errorMessage });

        // Display the error message using sweetalert2
        Swal.fire({
          icon: 'error',
          title: 'Failed to Send Message!',
          text: errorText,
          timer: 3000,
          showConfirmButton: true,
        });

        return;
        
      }

      // set success status for display below form and reset form fields
      setStatus({ type: "success", message: data?.message || "Thanks — we'll be in touch soon." });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });

      // Display the success message using sweetalert2
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: data?.message || "Thanks — we'll be in touch soon.",
        timer: 3000,
        showConfirmButton: true,
      });

    } catch (err: any) {

      // set error status for display below form
      setStatus({ type: "error", message: err?.message || 'Failed to send message.' });

      // Display the error message using sweetalert2
      Swal.fire({
        icon: 'error',
        title: 'Failed to Send Message!',
        text: err?.message || 'An unexpected error occurred. Please try again later.',
        timer: 3000,
        showConfirmButton: true,
      });

    }
  }

  return (
    <div className="pt-[72px] min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-blue/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-teal/10 via-transparent to-transparent" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-brand-teal" />
              <p className="font-secondary text-sm font-semibold text-brand-teal tracking-wider uppercase">
                Get in Touch
              </p>
            </div>
            <h1 className="font-primary text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Let's Discuss Your IT Infrastructure
            </h1>
            <p className="font-secondary text-gray-300 text-xl leading-relaxed max-w-xl">
              Our engineers and solution architects are ready to transform your operational workflows. Reach out and let's start a conversation.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Information & Details */}
          <div>
            <h2 className="font-primary text-3xl font-bold text-gray-900 mb-8">Connect With Us</h2>
            
            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-primary font-bold text-gray-900 mb-2">Email Us</h4>
                <p className="font-secondary text-gray-500 text-sm">info@sparrowwave.com</p>
                <p className="font-secondary text-gray-400 text-xs mt-2">We respond within 24 hours</p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-primary font-bold text-gray-900 mb-2">Call Us</h4>
                <p className="font-secondary text-gray-500 text-sm">+234 706 902 3467</p>
                <p className="font-secondary text-gray-400 text-xs mt-2">Mon-Fri, 9am – 6pm WAT</p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="font-primary font-bold text-gray-900 mb-2">WhatsApp</h4>
                <p className="font-secondary text-gray-500 text-sm">+234 706 902 3467</p>
                <p className="font-secondary text-gray-400 text-xs mt-2">For quick inquiries</p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-primary font-bold text-gray-900 mb-2">Lagos Office</h4>
                <p className="font-secondary text-gray-500 text-sm">No. 2 John Garaba Avenue, Soluyi, Ifako-Gbagada, Lagos</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-brand-teal" />
                <h3 className="font-primary font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-2 font-secondary text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-gray-800 font-medium">9:00 AM - 6:00 PM (WAT)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-gray-800 font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-primary font-bold text-gray-900 mb-4">Follow us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-all duration-300">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
            <div className="mb-6">
              <h2 className="font-primary text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="font-secondary text-gray-500 text-sm">Fill out the form and we'll get back to you within 24 hours.</p>
            </div>
            
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* form state is managed via React state below */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-secondary text-sm font-semibold text-gray-700 mb-2">Full name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all font-secondary text-gray-800 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block font-secondary text-sm font-semibold text-gray-700 mb-2">Work email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all font-secondary text-gray-800 placeholder:text-gray-400"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-secondary text-sm font-semibold text-gray-700 mb-2">Phone (optional)</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+234 123 456 7890"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all font-secondary text-gray-800 placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block font-secondary text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    type="text"
                    placeholder="How can we help?"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all font-secondary text-gray-800 placeholder:text-gray-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="block font-secondary text-sm font-semibold text-gray-700 mb-2">Project details</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your requirements, timeline, and budget..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all resize-none font-secondary text-gray-800 placeholder:text-gray-400"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full py-4 bg-brand-blue text-white font-semibold rounded-full hover:bg-brand-blue/90 transition-all duration-300 font-secondary shadow-md hover:shadow-lg group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.type === 'loading' ? status.message : 'Send Message'}
                <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs text-center text-gray-400 mt-4">
                By submitting, you agree to our <Link to="/privacy" className="text-brand-teal hover:underline">Privacy Policy</Link>. We'll never share your data.
              </p>
            </form>
            {/* {status.type === 'success' && (
              <div className="mt-4 text-sm text-green-600">{status.message || 'Message sent — we will reply shortly.'}</div>
            )}
            {status.type === 'error' && (
              <div className="mt-4 text-sm text-red-600">{status.message || 'There was an error sending your message.'}</div>
            )} */}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-24">
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <iframe
              title="Sparrowwave Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9532!2d3.3752!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b0c0c0c0c0c%3A0x0!2z2KfYr9mK2YbZiiDYp9mE2YjZhiDZhdmG2KfZg9ip!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[10%] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
              <MapPin className="w-3 h-3 text-gray-400" />
              No. 2 John Garaba Avenue, Soluyi, Ifako-Gbagada, Lagos, Nigeria
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-8 text-center">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-brand-teal" />
            <span className="font-secondary text-sm text-gray-600">Response within 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-brand-teal" />
            <span className="font-secondary text-sm text-gray-600">Free consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-brand-teal" />
            <span className="font-secondary text-sm text-gray-600">Confidential & secure</span>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
          <Sparkles className="w-8 h-8 text-brand-teal mx-auto mb-3" />
          <h3 className="font-primary text-xl font-bold text-gray-900 mb-2">Quick answers?</h3>
          <p className="font-secondary text-gray-500 mb-4">Check our FAQ section for common questions about our services and process.</p>
          <Link to="/faq" className="inline-flex items-center gap-1 text-brand-blue font-semibold text-sm hover:gap-2 transition-all">
            View FAQ
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
