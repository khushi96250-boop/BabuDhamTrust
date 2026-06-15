import React from "react";
import { Heart, Wheat, IndianRupee } from "lucide-react";

export function Donate() {
  return (
    <div className="pb-24 bg-slate-50">
      <div className="bg-[#A6192E] py-24 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Make a Difference</h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">Your contribution can light up a home, educate a child, and save a life.</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 -mt-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border-2 border-[#D4AF37] rounded-2xl p-8 text-center bg-[#D4AF37]/10">
              <Wheat className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">दान एक मुट्ठी अनाज</h3>
              <p className="text-slate-600 text-sm">Donate grains to help feed the hungry and build moral values.</p>
              <button className="mt-6 w-full bg-[#D4AF37] text-white py-3 rounded-xl font-bold">Pledge Grain</button>
            </div>
            
            <div className="border-2 border-[#A6192E] rounded-2xl p-8 text-center bg-[#A6192E]/5">
              <IndianRupee className="w-12 h-12 text-[#A6192E] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Financial Support</h3>
              <p className="text-slate-600 text-sm">Donate funds to support our medical, education, and welfare programs.</p>
              <button className="mt-6 w-full bg-[#A6192E] text-white py-3 rounded-xl font-bold">Donate Funds</button>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-semibold text-slate-900 mb-2">Want to volunteer instead?</h4>
            <p className="text-slate-500 mb-4">Join our team on the ground and help us directly.</p>
            <button className="px-6 py-2 border border-slate-300 rounded-full text-slate-700 font-medium hover:bg-slate-50">Become a Volunteer</button>
          </div>

        </div>
      </div>
    </div>
  );
}
