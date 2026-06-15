import React, { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "99582dc4-65d3-4229-a95e-f925b55625e9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <div className="pb-24">
      <div className="bg-slate-900 py-24 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">Get in touch with us for inquiries, partnerships, or support.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#A6192E] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Get In Touch</h2>
            <p className="text-slate-600 mb-8">
              We operate across multiple locations primarily in Delhi and Bihar. Feel free to reach out to our team at any time.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#A6192E]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Head Office (Delhi)</h4>
                  <p className="text-slate-600 text-sm">New Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#A6192E]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Branch Office (Bihar)</h4>
                  <p className="text-slate-600 text-sm">Narkatiaganj / Ramnagar, Bihar, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#A6192E]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-600 text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#A6192E]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600 text-sm">babudhamtrust@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#A6192E]" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#A6192E]" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea name="message" rows={4} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#A6192E]" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#A6192E] hover:bg-[#8a1425] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                <Send className="w-5 h-5" /> Send Message
              </button>
              {result && (
                <span className={`block text-center font-medium ${result.includes("Successfully") ? "text-green-600" : result.includes("Error") ? "text-red-600" : "text-slate-600"}`}>
                  {result}
                </span>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
