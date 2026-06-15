import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Heart, BookOpen, Briefcase, Users, ArrowRight } from "lucide-react";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBuZ28lMjBjaGFyaXR5fGVufDF8fHx8MTc4MDY2MTIzMHww&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Children and charity" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#A6192E]/90 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-[#D4AF37] text-slate-900 font-bold tracking-widest text-sm rounded-full mb-6 uppercase">
              गरीबों की सेवा में सदैव तत्पर
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Empowering Lives, <br />Building Futures
            </h1>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              Babu Dham Trust is dedicated to the social welfare, education, and healthcare of the underprivileged communities across Delhi and Bihar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate" className="bg-[#D4AF37] hover:bg-[#c4a132] text-slate-900 px-8 py-4 rounded-full font-bold transition-colors">
                Support Our Cause
              </Link>
              <Link to="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-colors">
                Discover Our Mission
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Focus Areas */}
      <section className="py-20 bg-white relative -mt-10 rounded-t-[3rem] z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#A6192E] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Our Main Focus</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Working tirelessly across key areas to ensure comprehensive community development and upliftment.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <FocusCard 
              icon={<Heart className="w-8 h-8 text-[#A6192E]" />}
              title="Health"
              desc="Free medical camps, insurance cards, and essential healthcare."
            />
            <FocusCard 
              icon={<BookOpen className="w-8 h-8 text-[#D4AF37]" />}
              title="Education"
              desc="Free coaching, girl child education, and skill training."
            />
            <FocusCard 
              icon={<Briefcase className="w-8 h-8 text-[#A6192E]" />}
              title="Employment"
              desc="Job preparation, self-reliance, and skill development."
            />
            <FocusCard 
              icon={<Users className="w-8 h-8 text-[#D4AF37]" />}
              title="Women & Child"
              desc="Empowerment, sanitary pads, and child welfare initiatives."
            />
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-[#A6192E] rounded-3xl translate-x-4 translate-y-4 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1586726370832-3440a511e479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwaW5nJTIwaGFuZHMlMjBjb21wYXNzaW9ufGVufDF8fHx8MTc4MDY2MTIzMHww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Helping hands" 
              className="relative z-10 rounded-3xl w-full h-[500px] object-cover shadow-xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-sm font-bold tracking-widest text-[#D4AF37] uppercase mb-3">बाबू धाम ट्रस्ट परिचय</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Established in 2008 with a vision for equality.
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Since our establishment, Babu Dham Trust has been a beacon of hope for countless families in Delhi and Bihar. Our mission is to bridge the gap between resources and those who need them most.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Government Scheme Awareness & Linking",
                "Social Welfare & Infrastructure Support",
                "Direct Relief & Material Distribution"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 text-[#A6192E] font-bold hover:text-[#7a1221] transition-colors group">
              Read Our Full Story <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact CTA */}
      <section className="bg-[#A6192E] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Together We Can Make a Difference</h2>
          <p className="text-xl text-white/80 mb-10">Join our hands in making the world a better place. Whether through volunteering or donations, your contribution matters.</p>
          <div className="flex justify-center gap-4">
            <Link to="/donate" className="bg-[#D4AF37] hover:bg-[#c4a132] text-slate-900 px-8 py-4 rounded-full font-bold transition-colors text-lg">
              Donate A Fistful of Grain
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FocusCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-slate-50 p-8 rounded-3xl hover:shadow-lg transition-shadow border border-slate-100 text-center flex flex-col items-center">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
