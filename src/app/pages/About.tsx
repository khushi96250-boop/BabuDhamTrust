import React from "react";
import { Users, Target, Map } from "lucide-react";

export function About() {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-slate-900 py-24 px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>About Babu Dham Trust</h1>
        <p className="text-xl text-slate-400">बाबू धाम ट्रस्ट परिचय</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#A6192E] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Story</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Established in <strong>2008</strong>, Babu Dham Trust was founded with a profound mission: to serve the poorest and most vulnerable sections of society.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Guided by the principle <em>"गरीबों की सेवा में सदैव तत्पर"</em> (Always ready to serve the poor), the trust has expanded its footprint across major regions in Delhi and Bihar, bringing tangible change to thousands of lives.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <span className="block text-3xl font-bold text-slate-900">2008</span>
                  <span className="text-sm text-slate-500 uppercase">Established</span>
                </div>
                <div className="border-l-4 border-[#A6192E] pl-4">
                  <span className="block text-3xl font-bold text-slate-900">Delhi & Bihar</span>
                  <span className="text-sm text-slate-500 uppercase">Primary Regions</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="public_folder/images/WhatsApp Image 2026-05-11 at 6.00.01 PM.jpeg" 
                alt="Trust Activities" 
                className="rounded-2xl shadow-md w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#A6192E] text-white p-10 rounded-3xl">
            <Target className="w-10 h-10 text-[#D4AF37] mb-6" />
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h3>
            <p className="text-white/80 leading-relaxed">
              To uplift the socio-economic status of marginalized communities through dedicated programs in education, healthcare, and employment, ensuring that government schemes reach the grassroots level.
            </p>
          </div>
          <div className="bg-[#D4AF37] text-slate-900 p-10 rounded-3xl">
            <Users className="w-10 h-10 text-[#A6192E] mb-6" />
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h3>
            <p className="text-slate-800 leading-relaxed">
              A society where every individual, regardless of their background, has access to quality education, proper healthcare, and equal opportunities to build a dignified life.
            </p>
          </div>
        </div>

        {/* Leadership */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#A6192E] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Leadership</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">The visionaries steering the organization toward a brighter future.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
            <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold mb-1">Ajay Prakash Pathak</h3>
            <p className="text-[#A6192E] font-medium mb-4">Founder</p>
            <p className="text-sm text-slate-600">Babu Dham Trust has done continuous working in the area of Champaran & as well in many other states of India.. This institution is not only working to reach out to the poor, Dalits, minorities and women, but also oversees their better implementation and takes necessary action if there are any shortcomings.</p>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
            <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold mb-1">President Information</h3>
            <p className="text-[#A6192E] font-medium mb-4">President</p>
            <p className="text-sm text-slate-600">Leading the operational initiatives and ensuring the trust's programs reach maximum beneficiaries.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
